import React, { Component } from "react";

class ToolPanel extends Component {
  render() {
    return (
      <div className="w-25 p-5">
        <h6>Number of objects:</h6>
        <input
          id="size-range"
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
            id="bubble-button"
            onClick={() => {
              this.props.onSort("bubble");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Bubble Sort
          </button>
          <button
            id="selection-button"
            onClick={() => {
              this.props.onSort("selection");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Selection Sort
          </button>
        </div>
        <div className="row">
          <button
            id="insertion-button"
            onClick={() => {
              this.props.onSort("insertion");
            }}
            type="button"
            className="btn btn-info col m-1"
          >
            Insertion Sort
          </button>
          <button
            id="heap-button"
            onClick={() => {
              this.props.onSort("heap");
            }}
            type="button"
            className="btn btn-info col m-1"
            disabled
          >
            Heap Sort
          </button>
        </div>
        <div className="row">
          <button
            id="quick-button"
            onClick={() => {
              this.props.onSort("quick");
            }}
            type="button"
            className="btn btn-info col m-1"
            disabled
          >
            Quick Sort
          </button>
          <button
            id="merge-button"
            onClick={() => {
              this.props.onSort("merge");
            }}
            type="button"
            className="btn btn-info col m-1"
            disabled
          >
            Merge Sort
          </button>
        </div>
        <button
          id="randomize-button"
          onClick={() => {
            this.props.onRandomize();
          }}
          type="button"
          className="btn btn-warning btn-lg w-100 m-1"
        >
          Randomize
        </button>
      </div>
    );
  }
}

export default ToolPanel;
