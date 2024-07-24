import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col mt-4 p-5">
      <button className="flex w-[150px] rounded-md justify-center bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Add Task
      </button>
      <div className="flex justify-between border items-center mt-4 shadow-md p-4 rounded-md">
        <div className="flex justify-center items-center gap-x-1">
          <span>Search:</span>
          <input
            className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex justify-center items-center gap-x-1">
          <span className="w-full">Sort By: </span>
          <input
            className="block px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            placeholder="Sort By..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
