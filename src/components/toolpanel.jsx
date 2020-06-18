import React, { Component } from "react";

class ToolPanel extends Component {
  render() {
    return (
      <div className="p-4">
        <h6>Number of objects:</h6>
        <input
          type="range"
          onChange={(event) => {
            this.props.onResize(event.target.value);
          }}
          min="4"
          max="100"
          className="w-75"
        ></input>
        <h6>Sorting methods:</h6>
        <button
          onClick={() => {
            this.props.onMethod("bubble");
          }}
          type="button"
          className="btn btn-info btn-lg m-1"
        >
          Bubble Sort
        </button>
        <button
          onClick={() => {
            this.props.onMethod("heap");
          }}
          type="button"
          className="btn btn-info btn-lg m-1"
        >
          Heap Sort
        </button>
        <button
          onClick={() => {
            this.props.onMethod("quick");
          }}
          type="button"
          className="btn btn-info btn-lg m-1"
        >
          Quick Sort
        </button>
        <button
          onClick={() => {
            this.props.onMethod("merge");
          }}
          type="button"
          className="btn btn-info btn-lg m-1"
        >
          Merge Sort
        </button>
        <h6>Actions:</h6>
        <button
          onClick={() => {
            this.props.onRandomize();
          }}
          type="button"
          className="btn btn-warning btn-lg m-1"
        >
          Randomize
        </button>
        <button type="button" className="btn btn-success btn-lg m-1">
          Sort
        </button>
      </div>
    );
  }
}

export default ToolPanel;
