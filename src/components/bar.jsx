import React, { Component } from "react";

class Bar extends Component {
  styles = {
    width: 10,
    height: this.props.size,
    marginLeft: 1,
  };
  render() {
    return <div style={this.styles} className="bg-primary"></div>;
  }
}

export default Bar;
