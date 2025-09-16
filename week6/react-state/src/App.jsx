import Button from "./components/Button";
import Section from "./components/Section";
import { useState } from "react";

export default function App() {
  // In case you need to to lift state
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>State</h1>
      {/* Pass state value and set fucntion as props */}

      <Section count={count} />
      <Button count={count} setCount={setCount} />
      <Button count={count} setCount={setCount} />
    </>
  );
}
