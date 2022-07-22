import React from "react";

const TodoCard = ({ title, description, id, added_at }) => {
  return (
    <div className="Todo-Card text-white mb-8 mt-4 flex items-center">
      <h1 className="text-2xl p-3 mr-4 flex justify-center items-center rounded-full">#{id}</h1>
      <div>
        <h3 className="text-xl pt-2 pb-1 sm:text-gray-400 sm:hover:text-white sm:hover:cursor-pointer transition">{title}</h3>
        <p className="text-xs pb-2 text-gray-400 leading-5">{description}</p>
        <h5 className="text-xs py-2 text-gray-200 border border-gray-500 inline-block mt-1 my-2 px-2 rounded-md">Added: {added_at.split("", 10)}</h5>
      </div>
    </div>
  );
};

export default TodoCard;
