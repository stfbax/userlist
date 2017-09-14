import React from "react";
import axios from "axios";

import "../../sass/UserEdit.scss";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "default first_name",
      last_name: "default last_name",
      id: this.props.match.params.id,
      updated: false
    };
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
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
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          loaded: true,
          loadingMessage: ""
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  updateUser() {
    axios
      .put(
        `http://js-assessment-backend.herokuapp.com/users/${this.state
          .id}.json`,
        {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          status: "active"
        }
      )
      .then(response => {
        console.log(response);
        this.setState({ updated: true });
        alert("User has been updated");
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div className="">
        <div className="title">UPDATE USER</div>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>SUBMIT</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>
                  {this.state.id}
                </th>
                <th>
                  <input
                    onChange={e => this.handleChange(e, "first_name")}
                    value={this.state.first_name}
                  />
                </th>
                <th>
                  <input
                    onChange={e => this.handleChange(e, "last_name")}
                    value={this.state.last_name}
                  />
                </th>
                <th>
                  <button
                    className="bttn-jelly bttn-xs bttn-success"
                    onClick={this.updateUser.bind(this)}
                  >
                    submit
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default UserEdit;
