import React from "react";

const TodoHeadline = ({ heading }) => {
  return (
    <div className="Todo-Headline">
      <h1 className="text-white border border-gray-400 px-8 py-0.5 rounded font-semibold">{heading}</h1>
    </div>
  );
};

export default TodoHeadline;
