import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <button onClick={() => setCount(count - 1)}style={{ margin: "0 10px" }} > Decrement </button>

//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }



function Counter(){
  const [currentColor, setColor] = useState("green")
  return(
    <>
      <div>
        <div>
          <button onClick={() => setColor("blue")}>red</button>
          <button onClick={() => setColor("green")}>green</button>
           <button onClick={() => setColor("blue")}>blue</button>
        </div>
      </div>
    </>
  );
}


export default Counter;




