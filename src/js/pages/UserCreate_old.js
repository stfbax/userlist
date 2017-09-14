import React from "react";
import axios from "axios";

import "../../sass/Buttons.scss";
import "../../sass/UserCreate.scss";

class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log("-->", formData);

    axios
      .post("http://js-assessment-backend.herokuapp.com/users.json", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        status: formData.status
      })
      .then(response => {
        alert("User has been created");
        this.props.history.push("/");
      })
      .catch(function(error) {
        console.log(error);
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
          <form onSubmit={this.handleSubmit} className="">
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <input className="" type="text" ref="first_name" />
                  </td>
                  <td>
                    <input className="" type="text" ref="last_name" />
                  </td>
                  <td>
                    -<select
                      className="bttn-jelly bttn-xs bttn-success"
                      ref="status"
                      name="status"
                    >
                      <option value="active">Active</option>
                      <option value="locked">Locked</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="bttn-jelly bttn-xs bttn-success"
                      type="submit"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default UserCreate;
