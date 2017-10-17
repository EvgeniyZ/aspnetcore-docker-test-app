import "../../SetupTests";
import React from "react";
import ReactDOM from "react-dom";
import SearchableUsersContainer from "../../../containers/Users/SearchableUsersContainer";

test("should SearchableUsersTable renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchableUsersContainer />, div);
});
