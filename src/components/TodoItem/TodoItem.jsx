import React from "react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ obj, removeTask, completeTask }) => {
  return (
    <main className="flex items-center bg-violet-500 rounded p-2 mb-4 text-white">
      <p
        className={`flex-1 cursor-pointer ${
          obj.isCompleted && "line-through text-gray-400"
        } `}
        onClick={() => completeTask(obj.id)}
      >
        {obj.text}
      </p>
      <div className="flex gap-2">
        <FaTrash
          className="cursor-pointer"
          onClick={() => removeTask(obj.id)}
        />
      </div>
    </main>
  );
};

export default TodoItem;
