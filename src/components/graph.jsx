import React, { Component } from "react";
import Bar from "./bar";
import ToolPanel from "./toolpanel";

class Graph extends Component {
  state = {
    bars: [
      { id: 1, size: 50 },
      { id: 2, size: 100 },
      { id: 3, size: 150 },
      { id: 4, size: 200 },
      { id: 5, size: 250 },
      { id: 6, size: 300 },
      { id: 7, size: 350 },
      { id: 8, size: 400 },
    ],
  };
  handleResize = (size) => {
    console.log("Event handler called", size);
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          {this.state.bars.map((bar) => (
            <Bar key={bar.id} size={bar.size} />
          ))}
        </div>
        <ToolPanel onResize={this.handleResize} />
      </div>
    );
  }
}

export default Graph;
