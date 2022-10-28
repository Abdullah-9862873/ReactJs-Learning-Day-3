import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

/* Use State is basically a hook and is used to hook the state from UI = f(State)... It takes two parameters, a value and a function.... And here I have assigned a value and a function but using Array Destructuring because I want to name the first and second parameter by myself... So I assigned a name of "count" and "setCount" to it... 
