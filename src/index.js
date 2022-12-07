import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

// document.querySelector('#root').innerHTML = `<h1>Micro-Front-End-1</h1>`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
