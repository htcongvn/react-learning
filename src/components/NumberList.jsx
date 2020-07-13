/* eslint-disable react/prop-types */
import React from "react";

function ListItem(props) {
  let randomN = Math.floor(Math.random() * 10);
  // Correct! There is no need to specify the key here:
  return (
    <li>
      {props.value.toString() +
        " * " +
        props.index +
        " * " +
        randomN +
        " = " +
        props.value * props.index * randomN}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} index={index} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

export default NumberList;
