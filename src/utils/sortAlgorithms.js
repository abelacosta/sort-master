import _ from "lodash";

function saveHistory(animation, left, right, array) {
  // Save indeces of selected bars
  animation.push(left);
  animation.push(right);
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
      saveHistory(animation, j, j + 1, _.cloneDeep(bars));
    }
  }
  return animation;
};

export const selectionSort = (bars) => {
  let animation = [];
  for (let i = 0; i < bars.length - 1; i++) {
    let leftBar = bars[i];
    for (let j = i + 1; j < bars.length; j++) {
      let rightBar = bars[j];

      if (leftBar.size > rightBar.size) {
        let tempSize = leftBar.size;
        leftBar.size = rightBar.size;
        rightBar.size = tempSize;
      }
      saveHistory(animation, i, j, _.cloneDeep(bars));
    }
  }
  return animation;
};

export const insertionSort = () => {};

export const mergeSort = () => {};

export const quickSort = () => {};

export const heapSort = () => {};
