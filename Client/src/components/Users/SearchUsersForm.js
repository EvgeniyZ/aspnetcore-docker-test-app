import React, { Component } from "react";
import PropTypes from "prop-types";
import UserTable from "./UsersTable";
import * as API from "../../api/UsersApi";

export default class SearchUsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let users = API.getUsers(100);
    this.setState(users);
  }

  searchUsers = (e, value) => {
    let users = API.getUsersByName(value);
  };

  render() {
    const { users } = this.state;

    return (
      <form>
        <input type="search" onChange={this.searchUsers} />
        <UserTable users={users} />
      </form>
    );
  }
}
