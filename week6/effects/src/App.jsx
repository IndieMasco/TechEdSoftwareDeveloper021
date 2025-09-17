// TODO: Fetch data from an API and render it on the page
// - Our data is an object with a "recipes" property with value of an array of objects

// STEP 1: To store the data in state --> useState()
// STEP 2: To synchronise our App component with the API call --> useEffect()

import { useState, useEffect } from "react";

export default function App() {
  // State
  const [recipes, setRecipes] = useState([]);

  // Effects
  // useEffect has two arguments: a callback function, a dependency array
  // We add out effect to the callback function

  // The effect will happen ONCE when the component renders --> empty dependency array
  // The effect will happen EVERY TIME the dependency value updates --> item (s) in the dependency
  useEffect(() => {
    // We cannot make the component function async
    async function getData() {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      const wrangleData = data.recipes;
      setRecipes(wrangleData);
    }
    getData();
  }, []);
  console.log(recipes); // You can see that the data in the console appears at the same time as the DOM elements in the page --> synchronised!

  return (
    <>
      <h1>Effects</h1>
    </>
  );
}
