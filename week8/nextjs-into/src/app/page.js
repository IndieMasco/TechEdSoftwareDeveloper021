"use client";

import React, { useState } from "react";

export default function Home() {
  const [numRolls, setNumRolls] = useState(1);
  const [rollValues, setRollValues] = useState([]);

  const RollDice = () => {
    const values = [];

    for (let i = 0; i < numRolls; i++) {
      const value = Math.floor(Math.random() * 20) + 1;
      values.push(value);
    }

    setRollValues(values);
  };

  const handleNumRollsChange = (event) => {
    const newNum = Math.max(1, parseInt(event.target.value) || 1);
    setNumRolls(newNum);
  };

  return (
    <div>
      <h1>D20</h1>
      <label htmlFor="numofdice">Number of rolls: </label>
      <input
        type="number"
        name="numofdice"
        value={numRolls}
        onChange={handleNumRollsChange}
        min="1"
      />
      <button onClick={RollDice}>Roll Dice</button>
      <div>Result: {rollValues.join(", ")}</div>
    </div>
  );
}
