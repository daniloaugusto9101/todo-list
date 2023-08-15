import React from "react";

const TodoForm = ({ addTask }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form
      className="border-2 border-violet-500 flex rounded-sm mb-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="html"
        placeholder="What is the task today?"
        className="flex-1 outline-none p-2 bg-indigo-950 text-white font-thin"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-violet-500 px-2 py-1 text-white">Add Task</button>
    </form>
  );
};

export default TodoForm;
