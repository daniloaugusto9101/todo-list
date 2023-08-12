import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const TodoItem = ({ task }) => {
  return (
    <main className="flex items-center bg-violet-500 rounded p-2 mb-4 text-white">
      <p className="flex-1">{task}</p>
      <div className="flex gap-2">
        <FaTrash className="cursor-pointer" />
        <FaEdit className="cursor-pointer" />
      </div>
    </main>
  );
};

export default TodoItem;
