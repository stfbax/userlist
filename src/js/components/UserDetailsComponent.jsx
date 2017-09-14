import React from "react";
import { Link } from "react-router";
import classNames from "classNames";
import dateformat from "dateformat";

import "../../sass/UserDetails.scss";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
}
render() {
    return (
      <div className="">
        <div className="title">USER DETAILS</div>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>Active/Locked</th>
                <th>Updated at</th>
                <th>Created at</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>

                      {this.props.users.id}



                </th>
                <th>
                  {this.props.users.first_name}
                </th>
                <th>
                  {this.props.users.last_name}
                </th>
                <th>
                  {this.props.users.status}
                </th>
                <th>
                  {dateformat(this.props.users.updated_at)}
                </th>
                <th>
                  {dateformat(this.props.users.created_at)}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
}

}

export default UserDetails
