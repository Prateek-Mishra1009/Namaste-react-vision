import React from "react"
import ReactDom from "react-dom/client";
console.log("App.js called");

// Create a React element
const parent = React.createElement("h1", {}, "This is rendering with React!");

const MainParent=React.createElement("div", {}, "This is New rendering with React!");

// Get the root element
const rootElement = document.getElementById("root");

// Create a root for React to manage using React 18's new API

// Render the React element into the root

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(MainParent);