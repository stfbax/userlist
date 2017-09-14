import React from "react";
import axios from "axios";

import UserListComponent from "../components/UserListComponent.jsx";

import "../../sass/UserList.scss";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false,
      loadingMessage: "User list is loading..."
    };
  }

  loadUsers() {
    axios
      .get(`http://js-assessment-backend.herokuapp.com/users.json`, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        this.setState({
          users: response.data,
          loaded: true,
          loadingMessage: ""
        });
      })
      .catch(error => {});
  }

  componentDidMount() {
    this.loadUsers();
  }

  changeStatus(id, status) {
    axios
      .put(`http://js-assessment-backend.herokuapp.com/users/${id}.json`, {
        status: status
      })
      .then(response => {
        this.loadUsers();
        this.setState({ loaded: false });
        alert("User status has been changed")
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.loaded) {
      return (
        <UserListComponent
          changeStatus={this.changeStatus.bind(this)}
          users={this.state.users}
        />
      );
    } else {
      return (
        <div className="title">
          {this.state.loadingMessage}
        </div>
      );
    }
  }
}
