import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function addCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        sint unde ipsam ducimus, cupiditate quasi dignissimos officiis vel odit
        cum, alias eaque incidunt maxime et blanditiis aperiam voluptatum
        voluptas deleniti.
      </h1>
      <button onClick={addCount} className="bg-blue-300 p-6">
        {count}
      </button>
    </>
  );
}

export default App;
