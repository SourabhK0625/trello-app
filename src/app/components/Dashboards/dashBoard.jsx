// DashBoard.js
"use client";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WorkSpaces from "./workSpace";
import Header from "./header";

const DashBoard = () => {
  const [sampleData, setSampleData] = useState([
    {
      title: "To Do",
      uniqueId: 1,
      workOrder: 1,
      cardList: [
        {
          id: "1",
          name: "Aman",
          pos: 1,
          description: "Aman",
          createdAt: "00/00/0000",
        },
        {
          id: "2",
          name: "Baman",
          pos: 2,
          description: "Baman",
          createdAt: "00/00/0000",
        },
        {
          id: "3",
          name: "Chaman",
          pos: 3,
          description: "Chaman",
          createdAt: "00/00/0000",
        },
      ],
    },
    {
      title: "In Progress",
      uniqueId: 2,
      workOrder: 2,
      cardList: [
        {
          id: "4",
          name: "Dhaman",
          pos: 1,
          description: "Dhaman",
          createdAt: "00/00/0000",
        },
        {
          id: "5",
          name: "Eeman",
          pos: 2,
          description: "Eeman",
          createdAt: "00/00/0000",
        },
      ],
    },
    {
      title: "Completed",
      uniqueId: 3,
      workOrder: 3,
      cardList: [
        {
          id: "6",
          name: "Faman",
          pos: 1,
          description: "Faman",
          createdAt: "00/00/0000",
        },
      ],
    },
  ]);

  /**
   * Select the card from sorce and drop it in destination
   * @param {*} source
   * @param {*} destination
   */
  const moveCard = (source, destination) => {
    if (
      !destination ||
      !destination.droppableId ||
      destination.index === undefined
    ) {
      return;
    }

    const sourceColIndex = sampleData.findIndex(
      (column) => column.uniqueId === source.droppableId
    );
    const destColIndex = sampleData.findIndex(
      (column) => column.uniqueId === destination.droppableId
    );

    if (sourceColIndex === -1 || destColIndex === -1) {
      return;
    }

    const sourceCol = sampleData[sourceColIndex];
    const destCol = sampleData[destColIndex];

    const sourceItems = [...sourceCol.cardList];
    const [removed] = sourceItems.splice(source.index, 1);

    if (!removed) {
      return;
    }

    let newSampleData = [...sampleData];

    if (sourceColIndex === destColIndex) {
      const newItems = [...sourceItems];
      newItems.splice(destination.index, 0, removed);
      newSampleData[sourceColIndex] = {
        ...sourceCol,
        cardList: newItems,
      };
    } else {
      const destItems = [...destCol.cardList];
      destItems.splice(destination.index, 0, removed);
      newSampleData = newSampleData.map((col, index) => {
        if (index === sourceColIndex) {
          return { ...sourceCol, cardList: sourceItems };
        } else if (index === destColIndex) {
          return { ...destCol, cardList: destItems };
        } else {
          return col;
        }
      });
    }

    setSampleData(newSampleData);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col">
        <Header />
        <div className="flex p-5">
          {sampleData.map((data) => (
            <WorkSpaces key={data.uniqueId} data={data} moveCard={moveCard} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DashBoard;
