import React from "react";

const AddTask = () => {
  return (
    <form className="border-2 border-violet-500 flex rounded-sm mb-6">
      <input
        type="text"
        id="html"
        placeholder="What is the task today?"
        className="flex-1 outline-none p-2 bg-indigo-950 text-white font-thin"
      />
      <button className="bg-violet-500 px-2 py-1 text-white">Add Task</button>
    </form>
  );
};

export default AddTask;
