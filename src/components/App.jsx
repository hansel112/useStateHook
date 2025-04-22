import React, { useState } from "react";

function App() {
  // const [state, setState] = useState(iniialState);
  const [count, setCount] = useState(0);

  function increase() {
    // setState(newstate);
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
