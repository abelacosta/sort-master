import React, { Component } from "react";

class ToolPanel extends Component {
  render() {
    return (
      <div className="p-2">
        <p>Number of objects:</p>
        <input
          type="range"
          onChange={(event) => {
            this.props.onResize(event.target.value);
          }}
          min="4"
          max="100"
          className="slider"
        ></input>
        <p>Sorting methods:</p>
        <button type="button" className="btn btn-outline-primary">
          Bubble Sort
        </button>
        <button type="button" className="btn btn-outline-primary">
          Heap Sort
        </button>
        <button type="button" className="btn btn-outline-primary">
          Quick Sort
        </button>
        <button type="button" className="btn btn-outline-primary">
          Merge Sort
        </button>
        <p>Actions:</p>
        <button type="button" className="btn btn-outline-primary">
          Randomize
        </button>
        <button type="button" className="btn btn-outline-primary">
          Sort
        </button>
      </div>
    );
  }
}

export default ToolPanel;
