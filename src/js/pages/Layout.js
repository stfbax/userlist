import React from "react";
import { Link } from "react-router-dom";

import UserList from "./UserList.js";
import UserDetails from "./UserDetails.js";
import UserCreate from "./UserCreate.js";
import Header from "../components/Header.js";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <span>
            <Link to="/"> List of users </Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/new"> New User </Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/overview"> Overview </Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/sites"> Sites </Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/payment"> Payment </Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/credits"> Credits </Link>
          </span>
          <span>/</span>
          <span>
            <Link to="/logout"> Logout </Link>
          </span>
        </Header>
        {this.props.children}
      </div>
    );
  }
}
