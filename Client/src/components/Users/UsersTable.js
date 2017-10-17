import React, { Component } from "react";
import PropTypes from "prop-types";

export default class UsersTable extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };

  renderUsers = users => {
    return users.map(user => (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.surname}</td>
      </tr>
    ));
  };

  render() {
    const { users } = this.props;

    return (
      <table>
        <tbody>{this.renderUsers(users)}</tbody>
      </table>
    );
  }
}
