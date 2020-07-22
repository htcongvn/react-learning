import React, { useState } from "react";

function TodoItem(props) {
  const [isLineThrough, setIsLineThrough] = useState(false);

  function handleClick() {
    setIsLineThrough((prevValue) => !prevValue);
  }

  return (
    <li
      style={{ textDecoration: isLineThrough ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
