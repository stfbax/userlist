import React from "react";
import axios from "axios";

import UserDetailsComponent from "../components/UserDetailsComponent.jsx";

import '../../sass/UserDetails.scss';

export default class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false,
      loadingMessage: "User details is loading...",
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://js-assessment-backend.herokuapp.com/users/${this.state
          .id}.json`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        this.setState({
          users: response.data,
          loaded: true,
          loadingMessage: ""
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    if (this.state.loaded) {
      return <UserDetailsComponent users={this.state.users} />;
    } else {
      return (
        <div className="title">
          {this.state.loadingMessage}
        </div>
      );
    }
  }
}
