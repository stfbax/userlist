import React from "react";
import { Link } from "react-router-dom";
import classNames from "classNames";
import dateformat from "dateformat";

import "../../sass/UserList.scss";
import "../../sass/Buttons.scss";

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      counter: 10,
      prevButton: true,
      nextButton: false
    };
  }
  next() {
    this.setState({
      page: this.state.page + 10,
      counter: this.state.counter + 10
    });
    console.log(this.state.page, this.state.counter);

    if (this.state.counter >= this.props.users.length - 10) {
      this.setState({ nextButton: true });
    }
    if ((this.state.counter = 10)) {
      this.setState({ prevButton: false });
    }
  }
  prev() {
    this.setState({
      page: this.state.page - 10,
      counter: this.state.counter - 10
    });
    console.log(this.state.page, this.state.counter);
    if (this.state.counter <= 20) {
      this.setState({ prevButton: true, nextButton: false });
    }
    if (this.state.counter > this.props.users.length) {
      this.setState({ nextButton: false });
    }
  }
  render() {
    return (
      <div>
        <div className="title">User List</div>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Id</th>
                <th>UserEdit</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Created at</th>
                <th>Active/Locked</th>
              </tr>
            </thead>
          </table>
        </div>

        {this.props.users
          .slice(this.state.page, this.state.counter)
          .map(user => {
            var changedStatus = user.status;
            if (user.status === "active") {
              changedStatus = "locked";
            }
            if (user.status === "locked") {
              changedStatus = "active";
            }

            return (
              <div key={user.id} className="">
                <div className="tbl-content">
                  <table cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <Link to={`user/${user.id}`}>
                            {user.id}
                          </Link>
                        </td>
                        <td>
                          <Link to={`user/${user.id}/edit`}>
                            {" "}Edit user tool
                          </Link>
                        </td>
                        <td>
                          {user.first_name}
                        </td>
                        <td>
                          {user.last_name}
                        </td>
                        <td>
                          {dateformat(user.created_at)}
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              this.props.changeStatus(user.id, changedStatus)}
                            className={classNames(
                              "bttn-jelly bttn-xs bttn-success",
                              user.status === "locked" && "bttn-danger"
                            )}
                          >
                            status: {user.status}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        <div className="number-of-users">
          number of users: {this.props.users.length}
        </div>
        <div className="buttonWrapper">
          <button
            disabled={this.state.prevButton}
            onClick={() => this.prev()}
            className="bttn-simple bttn-xs"
          >
            prev
          </button>

          <button
            disabled={this.state.nextButton}
            onClick={() => this.next()}
            className="bttn-simple bttn-xs"
          >
            next
          </button>
        </div>
        <div />
      </div>
    );
  }
}
