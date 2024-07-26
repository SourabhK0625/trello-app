"use client";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import ActionButton from "./actionButton";

const TaskCard = ({
  card,
  index,
  source,
  moveCard,
  setDeleteModal,
  setSelectCard,
  setEditModal,
  setViewModal,
}) => {
  const [, drag] = useDrag({
    type: "CARD",
    item: { id: card?.id, index, source },
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (item) => {
      if (
        item.index !== index ||
        item.source.droppableId !== source.droppableId
      ) {
        const source = {
          droppableId: item.source.droppableId,
          index: item.index,
        };
        const destination = {
          droppableId: source.droppableId,
          index: index,
        };
        item.index = index;
        item.source.droppableId = source.droppableId;
        moveCard(source, destination);
      }
    },
  });

  const actionButtons = [
    {
      title: "Delete",
      variant: "delete",
      onClick: () => {
        setSelectCard(card);
        setDeleteModal(true);
      },
    },
    {
      title: "Edit",
      variant: "edit",
      onClick: () => {
        setSelectCard(card);
        setEditModal(true);
      },
    },
    {
      title: "View Details",
      variant: "viewDetails",
      onClick: () => {
        setSelectCard(card);
        setViewModal(true);
      },
    },
  ];

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="flex flex-col bg-blue-200 mt-2 p-2 rounded-md h-[150px] justify-between"
    >
      <div>
        <h4 className="font-bold text-[18px]">{card?.name}</h4>
        <p className="text-[14px]">{card?.description}</p>
      </div>
      <div>
        <span className="text-[14px]">Created At {card?.createdAt}</span>
        <div className="text-end mt-2 flex justify-end gap-x-2">
          {actionButtons?.length > 0 &&
            actionButtons.map((button, index) => (
              <ActionButton
                key={index}
                title={button?.title}
                onClick={button?.onClick}
                variant={button?.variant}
                data={card}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
