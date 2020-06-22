import _ from "lodash";

function saveHistory(animation, selected, array) {
  // Save indeces of selected bars
  animation.push(selected);
  // Save state of array
  animation.push(array);
}

export const bubbleSort = (bars) => {
  let history = [];
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - 1 - i; j++) {
      let leftBar = bars[j];
      let rightBar = bars[j + 1];

      if (leftBar.size > rightBar.size) {
        let tempSize = leftBar.size;
        leftBar.size = rightBar.size;
        rightBar.size = tempSize;
      }
      let selected = [
        [j, "red"],
        [j + 1, "red"],
      ];
      saveHistory(history, selected, _.cloneDeep(bars));
    }
  }
  return history;
};

export const selectionSort = (bars) => {
  let history = [];
  for (let i = 0; i < bars.length; i++) {
    let leftBar = bars[i];
    let smallestIndex = i;
    for (let j = i; j < bars.length; j++) {
      let rightBar = bars[j];

      if (rightBar.size < bars[smallestIndex].size) {
        smallestIndex = j;
      }

      let selectedBars = [
        [i, "lightgreen"],
        [j, "red"],
        [smallestIndex, "red"],
      ];
      saveHistory(history, selectedBars, _.cloneDeep(bars));
    }
    let tempSize = leftBar.size;
    leftBar.size = bars[smallestIndex].size;
    bars[smallestIndex].size = tempSize;
  }
  return history;
};

export const insertionSort = (bars) => {
  let history = [];
  let i = 1;
  while (i < bars.length) {
    let j = i;
    while (j > 0 && bars[j - 1].size > bars[j].size) {
      let tempSize = bars[j - 1].size;
      bars[j - 1].size = bars[j].size;
      bars[j].size = tempSize;

      let selectedBars = [
        [j - 1, "red"],
        [j, "red"],
      ];
      saveHistory(history, selectedBars, _.cloneDeep(bars));

      j--;
    }
    i++;
  }
  return history;
};

export const mergeSort = () => {};

export const quickSort = () => {};

export const heapSort = () => {};
