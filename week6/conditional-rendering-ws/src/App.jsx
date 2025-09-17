import "./App.css";
import ListItems from "./components/ListItems";
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button className="button" onClick={() => setIsVisible(!isVisible)}>
        hey kid wanna see something cool
      </button>
      {isVisible && (
        <img
          src="https://c.tenor.com/jq3TOO2LoS0AAAAd/tenor.gif"
          alt="A cool cat gif"
        />
      )}
    </div>
  );
}
