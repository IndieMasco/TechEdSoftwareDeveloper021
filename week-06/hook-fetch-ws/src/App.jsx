import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data.recipes);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Recipes</h1>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <div>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </ul>
      ) : null}
    </>
  );
}
