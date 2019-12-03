import React from "react";
import ReactDOM from "react-dom";
import ChallengeOutput from "./ChallengeOutput";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render( < ChallengeOutput / > , div);
});