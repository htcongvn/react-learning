import React, { useState, useRef } from "react";

import TodoItem from "./TodoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const textInput = useRef(); // useRef Hook to store the textInput DOM element across renders

  function handleInputChange(event) {
    const newInputText = event.target.value;
    setInputText(newInputText);
  }

  function addNewItem() {
    setItemsList((prevItemsList) => {
      return [...prevItemsList, inputText];
    });

    setInputText("");
    // Explicitly focus the text input using the raw DOM API and accessing "current" to get the DOM node
    textInput.current.focus();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="newItem"
          type="text"
          placeholder="A new item"
          onChange={handleInputChange}
          value={inputText}
          //tell React that we want to associate the <input> ref with the `textInput` that we created using useRef Hook
          ref={textInput}
        />
        <button onClick={addNewItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsList.length > 0 &&
            itemsList.map((item, index) => (
              <TodoItem key={index} id={index} text={item} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
