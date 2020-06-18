import React, { Component } from "react";
import Bar from "./bar";
import ToolPanel from "./toolpanel";

class Graph extends Component {
  state = {
    bars: [],
  };

  constructor() {
    super();
    const newBars = [];
    for (let i = 0; i < 52; i++) {
      let randomSize = Math.floor(Math.random() * Math.floor(650));
      newBars.push({ id: i, size: randomSize });
    }
    this.state.bars = newBars;
  }

  randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  handleResize = (size) => {
    const newBars = [];
    for (let i = 0; i < size; i++) {
      let randomSize = Math.floor(Math.random() * Math.floor(650));
      newBars.push({ id: i, size: randomSize });
    }
    this.randomizeArray(newBars);
    this.setState({ bars: newBars });
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center w-75">
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
