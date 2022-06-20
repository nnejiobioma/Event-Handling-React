import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("SUBMITTING");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMoueOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMoueOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
