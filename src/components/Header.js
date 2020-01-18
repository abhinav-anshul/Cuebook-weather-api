import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header_container">
        <div className="weather-icon">
          <img src="https://img.icons8.com/officel/80/000000/chance-of-storm.png" />
        </div>
        <div className="actual-header">weather app</div>
      </div>
    );
  }
}

export default Header;
