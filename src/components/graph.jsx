import React, { Component } from "react";
import shortid from "shortid";
import Bar from "./bar";
import ToolPanel from "./toolpanel";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
  heapSort,
} from "../utils/sortAlgorithms";

class Graph extends Component {
  state = {
    bars: [],
    maxHeight: 650,
    minHeight: 100,
    defaultBarColor: "#17a2b8",
    selectedColor: "red",
    sortSpeed: 3,
  };

  constructor() {
    super();
    const newBars = [];
    let increment = Math.floor(
      (this.state.maxHeight - this.state.minHeight) / 52
    );
    for (let i = 0; i < 52; i++) {
      let barHeight = this.state.minHeight + i * increment;
      newBars.push({
        id: shortid.generate(),
        size: barHeight,
        bgColor: this.state.defaultBarColor,
      });
    }
    this.randomizeArray(newBars);
    this.state.bars = newBars;
  }

  onBubbleSort() {
    this.disableControls();
    let animation = bubbleSort(this.state.bars);
    for (let i = 0; i < animation.length; i += 3) {
      setTimeout(() => {
        let leftIndex = animation[i];
        let rightIndex = animation[i + 1];
        let array = animation[i + 2];
        // At last step, we don't have to change colors
        if (i < animation.length - 3) {
          array[leftIndex].bgColor = this.state.selectedColor;
          array[rightIndex].bgColor = this.state.selectedColor;
        }
        this.setState({ bars: array });
      }, i * this.state.sortSpeed);
    }

    // At this point, sort if finished
    setTimeout(() => {
      this.enableControls();
    }, animation.length * this.state.sortSpeed);
  }

  onSelectionSort() {
    selectionSort();
  }

  onInsertionSort() {
    insertionSort();
  }

  onHeapSort() {
    heapSort();
  }

  onQuickSort() {
    quickSort();
  }

  onMergeSort() {
    mergeSort();
  }

  randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  enableControls() {
    // Get elements
    let bubbleButton = document.getElementById("bubble-button");
    let selectionButton = document.getElementById("selection-button");
    let insertionButton = document.getElementById("insertion-button");
    let heapButton = document.getElementById("heap-button");
    let quickButton = document.getElementById("quick-button");
    let mergeButton = document.getElementById("merge-button");
    let randomizeButton = document.getElementById("randomize-button");
    let sizeRange = document.getElementById("size-range");

    // Disable elements
    bubbleButton.disabled = false;
    selectionButton.disabled = false;
    insertionButton.disabled = false;
    heapButton.disabled = false;
    quickButton.disabled = false;
    mergeButton.disabled = false;
    randomizeButton.disabled = false;
    sizeRange.disabled = false;
  }

  disableControls() {
    // Get elements
    let bubbleButton = document.getElementById("bubble-button");
    let selectionButton = document.getElementById("selection-button");
    let insertionButton = document.getElementById("insertion-button");
    let heapButton = document.getElementById("heap-button");
    let quickButton = document.getElementById("quick-button");
    let mergeButton = document.getElementById("merge-button");
    let randomizeButton = document.getElementById("randomize-button");
    let sizeRange = document.getElementById("size-range");

    // Disable elements
    bubbleButton.disabled = true;
    selectionButton.disabled = true;
    insertionButton.disabled = true;
    heapButton.disabled = true;
    quickButton.disabled = true;
    mergeButton.disabled = true;
    randomizeButton.disabled = true;
    sizeRange.disabled = true;
  }

  handleRandomize = () => {
    const tempBars = this.state.bars;
    this.randomizeArray(tempBars);
    this.setState({ bars: tempBars });
  };

  handleSort = (method) => {
    switch (method) {
      case "bubble":
        this.onBubbleSort();
        break;
      case "selection":
        this.onSelectionSort();
        break;
      case "insertion":
        this.onInsertionSort();
        break;
      case "heap":
        this.onHeapSort();
        break;
      case "quick":
        this.onQuickSort();
        break;
      case "merge":
        this.onMergeSort();
        break;
      default:
        break;
    }
  };

  handleResize = (size) => {
    const newBars = [];
    let increment = Math.floor(
      (this.state.maxHeight - this.state.minHeight) / size
    );
    for (let i = 0; i < size; i++) {
      let barHeight = this.state.minHeight + i * increment;
      newBars.push({
        id: shortid.generate(),
        size: barHeight,
        bgColor: this.state.defaultBarColor,
      });
    }
    this.randomizeArray(newBars);
    this.setState({ bars: newBars });
  };
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div name="bar-graph" className="d-flex justify-content-center w-75">
          {this.state.bars.map((bar) => (
            <Bar key={bar.id} size={bar.size} color={bar.bgColor} />
          ))}
        </div>
        <ToolPanel
          onResize={this.handleResize}
          onSort={this.handleSort}
          onRandomize={this.handleRandomize}
        />
      </div>
    );
  }
}

export default Graph;
