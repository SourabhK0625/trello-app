"use client";
import React from "react";
import ActionButton from "./actionButton";

const TaskCard = ({ card }) => {
  const actionButtons = [
    {
      title: "Delete",
      variant: "delete",
      onClick: () => console.log("Delete"),
    },
    {
      title: "Edit",
      variant: "edit",
      onClick: () => console.log("Edit"),
    },
    {
      title: "View Details",
      variant: "viewDetails",
      onClick: () => console.log("View Details"),
    },
  ];
  return (
    <div className="flex flex-col bg-blue-200 mt-2 p-2 rounded-md h-[200px] justify-between">
      <div>
        <h4 className="font-bold text-[18px]">{card?.name}</h4>
        <p className="text-[14px]">{card?.description}</p>
      </div>
      <div>
        <span className="text-[14px]">Created At {card?.createdAt}</span>
        <div className="text-end mt-2 flex justify-end gap-x-2">
          {actionButtons?.length > 0 &&
            actionButtons.map((button, index) => {
              return (
                <ActionButton
                  key={index}
                  title={button?.title}
                  onClick={button?.onClick}
                  variant={button?.variant}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
