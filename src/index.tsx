import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { run } from "./typescript/this";

const container = document.getElementById("root");

if (container === null) {
  alert("Hey, mir fehlt mein Container, wohin soll ich rendern?!");
} else {
  ReactDOM.createRoot(container).render(<App />);
}

run();
