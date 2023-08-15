import React from "react";
import Header from "../Header/Header";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const [todo, setTodo] = React.useState([
    {
      id: 1,
      text: "Tarefa 1",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Tarefa 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Tarefa 3",
      isCompleted: false,
    },
  ]);

  const addTask = (text) => {
    const newTasks = [
      ...todo,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        isCompleted: false,
      },
    ];
    setTodo(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = [...todo];
    const filteredTodos = newTasks.filter((task) =>
      task.id !== id ? task : null
    );
    setTodo(filteredTodos);
  };

  const completeTask = (id) => {
    const newTasks = [...todo];
    newTasks.map((task) =>
      task.id === id ? (task.isCompleted = !task.isCompleted) : task
    );
    setTodo(newTasks);
  };

  return (
    <div className="bg-indigo-950 max-w-md m-auto p-4 flex flex-col rounded-md mt-2">
      <Header />
      <TodoForm addTask={addTask} />
      {todo.map((obj, ind) => (
        <TodoItem
          key={ind}
          obj={obj}
          removeTask={removeTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
