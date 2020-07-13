import React from "react";
import Greeting from "./Greeting";

const currentDate = new Date("March 13, 08 14:20");
const currentHour = {
  h: currentDate.getHours(),
  m: currentDate.getMinutes(),
};

function App3() {
  return <Greeting currentHour={currentHour} />;
}

export default App3;
