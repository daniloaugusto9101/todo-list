import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const TODO_ITEM = [
    {
      task: "Tarefa 1",
      isCompleted: false,
    },
    {
      task: "Tarefa 2",
      isCompleted: false,
    },
    {
      task: "Tarefa 3",
      isCompleted: false,
    },
  ];
  return (
    <>
      {TODO_ITEM.map((obj, ind) => (
        <TodoItem key={ind} task={obj.task} />
      ))}
    </>
  );
};

export default TodoList;
