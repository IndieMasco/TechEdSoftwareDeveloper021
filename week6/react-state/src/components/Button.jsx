// State
// Hook --> pre-made React method (use...)

import { useState } from "react";

export default function Button() {
  // How to declate state --> function scope
  // Hook to declare, store, track state updates (set) --> useState()

  // Structure of useState
  // const [stateVariable, srtStateVariable ] = useState(initialValue);

  // Example of useState
  const [count, setCount] = useState(0);

  function handleClick() {
    // I want the calue of count to go up by 1 when the user clicks the button
    // !!! DO NOT UPDATE THE VALUE OF STATE DIRECTLY !!!
    // Always use ser function to track updates in state
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>CLICK ME!</button>
      <p>{count}</p>
    </>
  );
}
