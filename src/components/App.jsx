import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hi");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleClick(event) {
    const [greetingVerb] = headingText.split(" ");
    setHeadingText((greetingVerb === "Hello" ? "Bonjour " : "Hello ") + name);

    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
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
