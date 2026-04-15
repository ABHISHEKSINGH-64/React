import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "0 10px" }}
      >
        Decrement
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;




  // const increment = () => setCount(prev => prev + 1);
  // const decrement = () => setCount(prev => prev - 1);
  // const reset = () => setCount(0);
