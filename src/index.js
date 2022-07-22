import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App"; 
// GridIndex
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App /> 
//   </StrictMode>
// );

// Put the thing into the DOM!
ReactDOM.render(<App />, document.getElementById("root"));
