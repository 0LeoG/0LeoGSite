import React, { Component } from "react";
import "./../Styles/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="mainFlex">
        <div className="flexNav">
          <div id="navElement">
            Home
          </div>
          <div id="navElement">Resume</div>
          <div id="navElement">LinkedIn</div>
        </div>
      </div>
    );
  }
}

export default NavBar;
