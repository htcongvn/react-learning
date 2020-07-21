import React, { useState } from "react";

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleClick(event) {
    console.log(fullName);

    event.preventDefault();
  }

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function handleFullNameChange(event) {
    const { name, value } = event.target;
    console.log(name, value);

    setFullName((prevFullName) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevFullName.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevFullName.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hey {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          type="text"
          placeholder="What's your first name?"
          onChange={handleFullNameChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          type="text"
          placeholder="What's your last name?"
          onChange={handleFullNameChange}
          value={fullName.lName}
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
