import "../../SetupTests";
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import SearchUsersForm from "../../../components/Users/SearchUsersForm";

test("should SearchUsersForm render without crashing", () => {
  jest.mock("UsersApi");
  const div = document.createElement("div");
  ReactDOM.render(<SearchUsersForm />, div);
});
