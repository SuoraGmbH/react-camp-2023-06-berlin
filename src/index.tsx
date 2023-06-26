import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>Hallo Hyperion!!!</h1>
const container = document.getElementById('root');

if(container === null) {
    alert("Hey, mir fehlt mein Container, wohin soll ich rendern?!")
} else {
    ReactDOM
        .createRoot(container)
        .render(element)
}
