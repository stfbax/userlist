import React from "react";
import axios from "axios";

import "../../sass/Buttons.scss";
import "../../sass/UserCreate.scss";

class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "first name",
      last_name: "last name",
      status: "active",
      created: false
    };
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  }

  createUser() {
    axios
      .post(`http://js-assessment-backend.herokuapp.com/users.json`, {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        status: this.state.status
      })
      .then(response => {
        console.log(response);
        this.setState({ created: true });
        alert("User has been created");
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div className="">
        <div className="title">Create USER</div>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last Name</th>
                <th>Active/Locked</th>
                <th>SUBMIT</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <input
                    onChange={e => this.handleChange(e, "first_name")}
                    value={this.state.first_name}
                  />
                </td>
                <td>
                  <input
                    onChange={e => this.handleChange(e, "last_name")}
                    value={this.state.last_name}
                  />
                </td>
                <td>
                  <select
                    className="bttn-jelly bttn-xs bttn-success"
                    ref="status"
                    name="status"
                    onChange={e => this.handleChange(e, "status")}
                    value={this.state.status}
                  >
                    <option value="active">Active</option>
                    <option value="locked">Locked</option>
                  </select>
                </td>
                <td>
                  <button
                    className="bttn-jelly bttn-xs bttn-success"
                    onClick={this.createUser.bind(this)}
                  >
                    submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserCreate;
