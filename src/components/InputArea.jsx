import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const textInput = useRef(); // useRef Hook to store the textInput DOM element across renders

  function handleInputChange(event) {
    const newInputText = event.target.value;
    setInputText(newInputText);
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="New Todo Item"
        onChange={handleInputChange}
        value={inputText}
        //tell React that we want to associate the <input> ref with the `textInput` that we created using useRef Hook
        ref={textInput}
      />
      <button
        onClick={() => {
          props.onAddItem(inputText);
          setInputText("");
          // Explicitly focus the text input using the raw DOM API and accessing "current" to get the DOM node
          textInput.current.focus();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
// Prop Type Validation
InputArea.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
export default InputArea;
