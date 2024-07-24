import React from "react";

const buttonVariantClass = (variant) => {
  switch (variant) {
    case "delete":
      return "bg-red-500 text-white hover:bg-red-600";
    case "edit":
      return "bg-blue-500 text-white hover:bg-blue-600";
    case "viewDetails":
      return "bg-blue-900 text-white hover:bg-dark-blue-600";
    default:
      return "bg-gray-500 text-white hover:bg-gray-600";
  }
};

const ActionButton = ({ variant, title, onClick }) => {
  return (
    <button
      className={`px-2 py-1 rounded ${buttonVariantClass(variant)}`}
      onClick={onClick}
    >
      <span className="text-white text-sm">{title}</span>
    </button>
  );
};

export default ActionButton;
