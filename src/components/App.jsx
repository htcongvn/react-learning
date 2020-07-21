import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hi");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");

  function handleClick(event) {
    const [greetingVerb] = headingText.split(" ");
    setHeadingText(
      (greetingVerb === "Hello" ? "Bonjour " : "Hello ") + lName + " " + fName
    );

    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleLNameChange(event) {
    setLName(event.target.value);
  }

  function handleFNameChange(event) {
    setFName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          type="text"
          placeholder="What's your first name?"
          onChange={handleFNameChange}
          value={fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="What's your last name?"
          onChange={handleLNameChange}
          value={lName}
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
