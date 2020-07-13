import React from "react";
import NumberList from "./NumberList";

// vanilla Javascript
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World! from vanilla Javascript";
// document.getElementById("root").appendChild(h1);

const numbers = [1, 2, 3, 4, 5];
function App() {
  return <NumberList numbers={numbers} />;
}

export default App;
