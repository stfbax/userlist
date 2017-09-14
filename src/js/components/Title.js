import React from "react";
import { Link } from "react-router";

import "../../sass/Title.scss";

class Title extends React.Component {
  render() {
    return (
      <div className="">
        <div className="title">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Title;
