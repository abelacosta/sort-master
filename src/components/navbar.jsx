import React, { Component } from "react";
import ghLogo from "../gh-32.png";

class NavBar extends Component {
  state = {
    webSiteName: "Sort Master",
  };

  imageStyle = {};

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-4">
        <h1 className="navbar-brand">
          {this.state.webSiteName}
          <small className="mb-0">
            {" - "}Visualize sorting algorithms in action!
          </small>
        </h1>
        <a href="https://github.com/abelacosta/sort-master">
          <img className="pr-3" src={ghLogo} alt="GitHub Logo"></img>
        </a>
      </nav>
    );
  }
}

export default NavBar;
