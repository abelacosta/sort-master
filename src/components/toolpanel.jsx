import React, { Component } from "react";

class ToolPanel extends Component {
  render() {
    return (
      <div className="w-25 p-5">
        <button
          onClick={() => {
            this.props.onRandomize();
          }}
          type="button"
          className="btn btn-warning btn-lg w-100 m-1"
        >
          Randomize
        </button>
        <h6>Number of objects:</h6>
        <input
          type="range"
          onChange={(event) => {
            this.props.onResize(event.target.value);
          }}
          min="4"
          max="100"
          className="w-100"
        ></input>
        <h6>Sorting methods:</h6>
        <div className="row">
          <button
            onClick={() => {
              this.props.onMethod("bubble");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Bubble Sort
          </button>
          <button
            onClick={() => {
              this.props.onMethod("selection");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Selection Sort
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => {
              this.props.onMethod("insertion");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Insertion Sort
          </button>
          <button
            onClick={() => {
              this.props.onMethod("heap");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Heap Sort
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => {
              this.props.onMethod("quick");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Quick Sort
          </button>
          <button
            onClick={() => {
              this.props.onMethod("merge");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Merge Sort
          </button>
        </div>
      </div>
    );
  }
}

export default ToolPanel;
