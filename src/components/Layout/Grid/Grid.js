import React from "react";
import "./css/Grid.style.css";

const GridContentBox = (props) => {
  return <div className="grid-cont">{props.children}</div>;
};

export { GridContentBox };
