import React, { Component } from "react";

class Bar extends Component {
  getStyles() {
    let styles = {
      width: 10,
      height: this.props.size,
      marginLeft: 2,
      backgroundColor: this.props.color,
    };
    return styles;
  }

  render() {
    return <div style={this.getStyles()}></div>;
  }
}

export default Bar;
