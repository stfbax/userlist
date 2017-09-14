import React from "react";
import { Link } from "react-router";

import "../../sass/Header.scss";
import "../../sass/Buttons.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="header">
          <div>USERLIST MVC</div>
          <div className="links">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
