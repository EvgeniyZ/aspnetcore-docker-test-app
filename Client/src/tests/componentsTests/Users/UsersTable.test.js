import "../../SetupTests";
import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import UsersTable from "../../../components/Users/UsersTable";
import { users } from "./UsersFixture";

test("should UsersTable render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UsersTable users={users} />, div);
});
