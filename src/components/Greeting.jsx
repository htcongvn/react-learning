/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function Greeting(props) {
  const greetings = [
    { content: "Good morning", color: "red" },
    { content: "Good afternoon", color: "green" },
    { content: "Good evening", color: "blue" },
  ];

  let now, customStyle;

  if (props.currentHour["h"] < 12) {
    now = 0;
  } else if (props.currentHour["h"] < 18) {
    now = 1;
  } else {
    now = 2;
  }

  customStyle = { color: greetings[now].color };

  return (
    <div>
      <h1 style={customStyle} className="heading">
        {greetings[now].content}
      </h1>
      <p style={customStyle}>
        {props.currentHour["h"]}:{props.currentHour["m"]}
      </p>
    </div>
  );
}

export default Greeting;
