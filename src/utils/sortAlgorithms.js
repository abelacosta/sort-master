import _ from "lodash";

function saveHistory(animation, selected, array) {
  // Save indeces of selected bars
  animation.push(selected);
  // Save state of array
  animation.push(array);
}

export const bubbleSort = (bars) => {
  let animation = [];
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
      saveHistory(animation, selected, _.cloneDeep(bars));
    }
  }
  return animation;
};

export const selectionSort = (bars) => {
  let animation = [];
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
      saveHistory(animation, selectedBars, _.cloneDeep(bars));
    }
    let tempSize = leftBar.size;
    leftBar.size = bars[smallestIndex].size;
    bars[smallestIndex].size = tempSize;
  }
  return animation;
};

export const insertionSort = () => {};

export const mergeSort = () => {};

export const quickSort = () => {};

export const heapSort = () => {};
