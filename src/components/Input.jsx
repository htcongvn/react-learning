import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onChange={(event) => {
        props.onChange(event);
      }}
      value={props.value}
      //tell React that we want to associate the <input> ref with the `textInput` that we created using useRef Hook
      ref={props.inputRef}
    />
  );
}
// Prop Type Validation
Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  inputRef: PropTypes.object,
  onChange: PropTypes.func,
};
export default Input;
