import _ from "lodash";

export const bubbleSort = (bars) => {
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - 1; j++) {
      let leftBar = bars[j];
      let rightBar = bars[j + 1];

      if (leftBar.size > rightBar.size) {
        let tempSize = leftBar.size;
        leftBar.size = rightBar.size;
        rightBar.size = tempSize;
      }
    }
  }
};

export const insertionSort = () => {};

export const selectionSort = () => {};

export const mergeSort = () => {};

export const quickSort = () => {};

export const heapSort = () => {};
