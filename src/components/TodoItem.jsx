import React from "react";
import PropTypes from "prop-types";

function TodoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}
TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number,
  onChecked: PropTypes.func,
};

export default TodoItem;
