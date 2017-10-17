import "../../SetupTests";
import React from "react";
import ReactDOM from "react-dom";
import App from "../../../containers/App/App";

test("should App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
