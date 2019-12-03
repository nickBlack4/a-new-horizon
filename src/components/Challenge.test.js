import React from "react";
import ReactDOM from "react-dom";
import Challenge from "./Challenge";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render( < Challenge / > , div);
});