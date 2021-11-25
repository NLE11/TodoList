import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RequestProvider } from "react-request-hook";
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "/", // Passing the proxy path
  baseURL: "/",
});

// Render the app in the root div within the html in the public folder
ReactDOM.render(
  <React.StrictMode>
    <RequestProvider value={axiosInstance}>
      <App />
    </RequestProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
