import React, { Component } from 'react';

class UserRow extends Component {
  constructor(props) {
    super(props);
  }

  handleRemoveUser = () => {
    this.props.onRemoveUser(this.props.id);
  }

  render() {
    const user = this.props.user;
    return (
      <tr key={user.id}>
        <td>{this.props.id}</td>
        <td>{user.email}</td>
        <td>{user.country}</td>
        <td>{user.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{user.information}</td>
        <td>
          <button type="button" className="close" onClick={this.handleRemoveUser}>
            <span aria-hidden="true">×</span>
          </button>
        </td>
      </tr>
    )
  }
}

export default UserRow;
