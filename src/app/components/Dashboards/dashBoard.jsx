"use client";
import React from "react";
import WorkSpaces from "./workSpace";
import Header from "./header";

const DashBoard = () => {
  const sampleData = [
    {
      title: "To Do",
      uniqueId: 1,
      workOrder: 1,
      cardList: [
        {
          name: "Card1",
          pos: 1,
          description: "Card1",
          createdAt: "00/00/0000",
        },
        {
          name: "dvvsdgfdgfd",
          pos: 2,
          description: "Card1",
          createdAt: "00/00/0000",
        },
        {
          name: "sfsdffsdf",
          pos: 3,
          description: "Card1",
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
          name: "Card2",
          pos: 1,
          description: "Card2",
          createdAt: "00/00/0000",
        },
        {
          name: "Card2",
          pos: 2,
          description: "Card2",
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
          name: "Card3",
          pos: 1,
          description: "Card3",
          createdAt: "00/00/0000",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex p-5">
        {sampleData?.map((data) => {
          return <WorkSpaces key={data?.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default DashBoard;
