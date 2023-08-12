import React from "react";
import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="bg-indigo-950 max-w-md m-auto p-4 flex flex-col rounded-md mt-2">
      <Header />
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
