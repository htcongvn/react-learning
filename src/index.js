/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */

// Latest feature to come to Javascript (ES6+) is the import ad export keywords
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App1 />, document.getElementById("root_1"));
ReactDOM.render(<App2 />, document.getElementById("root_2"));
ReactDOM.render(<App3 />, document.getElementById("root_3"));
