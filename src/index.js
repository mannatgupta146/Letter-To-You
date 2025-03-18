
import reportWebVitals from './reportWebVitals';
import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { HashRouter } from "react-router-dom"; // Import HashRouter for GitHub Pages
import App from "./App";

// Create a root and render the app
const container = document.getElementById("root");
const root = createRoot(container); // Declare 'root' with const

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
