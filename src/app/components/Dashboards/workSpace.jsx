"use client";
import React from "react";
import TaskCard from "./taskCard";

const WorkSpaces = ({ data }) => {
  console.log("Work", data);
  return (
    <div className="flex-col container shadow-md border rounded-md p-2 m-2 max-w-[350px]">
      <h3 className="bg-blue-500 text-start p-2 text-white font-semibold">
        {data?.title}
      </h3>
      <div className="flex-col mt-4">
        {data?.cardList?.map((card) => (
          <TaskCard key={card?.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default WorkSpaces;
