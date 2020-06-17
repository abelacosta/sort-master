import React, { Component } from "react";
import Bar from "./bar";

class Graph extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Bar size={50} />
        <Bar size={60} />
        <Bar size={70} />
        <Bar size={80} />
        <Bar size={90} />
        <Bar size={300} />
        <Bar size={350} />
        <Bar size={400} />
        <Bar size={450} />
        <Bar size={500} />
        <Bar size={550} />
        <Bar size={600} />
        <Bar size={650} />
      </div>
    );
  }
}

export default Graph;
