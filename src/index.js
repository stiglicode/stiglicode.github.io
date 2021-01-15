import React from "react";
import ReactDOM from "react-dom";

import Session from "./view/Session.view";

import "./assets/style/css/main.css";

const root = document.getElementById("__root");
ReactDOM.render(
  <React.StrictMode>
    <Session />
  </React.StrictMode>,
  root
);
