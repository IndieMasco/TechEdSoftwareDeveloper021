import { useState } from "react";

function HandleClick() {
  const [count, setCount] = useState(0);

  const handleIn = () => {
    setCount(count + 1);
  };

  const handleDe = () => {
    setCount(count - 1);
  };

  const handleRe = () => {
    setCount(0);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIn}>Increase</button>
      <button onClick={handleDe}>Decrease</button>
      <button onClick={handleRe}>Reset</button>
    </>
  );
}

export default HandleClick;
