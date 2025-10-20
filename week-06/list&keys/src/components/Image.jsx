// TODO: Conditonally render the title and author to have a cleaner UI with a focus on just the images
// STEP 1: Event --> onClick
// STEP 2: State --> toggle
// STEP 3: Add the conditional logic (if the user clicks on the image, show or hide the title and author)

import "./Image.css";
import { useState } from "react";

//you could also use the props parameter --> props.imgUrl, props.title, props.author
export default function Image({ imgUrl, title, author }) {
  // State --> Initial value, variable (showData), set function

  const [showData, setShowData] = useState(false);
  function handleClick() {
    // We want to change state from true to false, and from false to true
    setShowData(!showData);

    // if (showData) {
    //   setShowData ((showData = !showData))
    // }

    // showData ? !showData : showData;
  }

  return (
    <section className="image-section">
      <img
        src={imgUrl}
        alt={title}
        className="w-80 h-96 rounded-2xl"
        onClick={handleClick}
      />
      {/* We will use a ternary operator to conditionally render the title and author */}
      {showData ? (
        <>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-xl">{author}</p>
        </>
      ) : null}
    </section>
  );
}
