type animationObject = {
  index1: number;
  index2: number;
};

const getQuickSortAnimations = (arr: number[]): animationObject[] => {
  let animations: animationObject[] = [];
  quickSort(arr, 0, arr.length - 1, animations);
  return animations;
};

const swap = (arr: number[], index1: number, index2: number) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const partition = (
  arr: number[],
  low: number,
  high: number,
  animations: animationObject[],
): number => {
  let pivot = arr[low];

  let i = low + 1;
  let j = high;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      animations.push({index1: i, index2: j});
      swap(arr, i, j);
    }
  }
  animations.push({index1: low, index2: j});
  swap(arr, low, j);
  return j;
};

const quickSort = (
  arr: number[],
  low: number,
  high: number,
  animations: animationObject[],
) => {
  if (low < high) {
    let pi: number = partition(arr, low, high, animations);
    quickSort(arr, low, pi, animations);
    quickSort(arr, pi + 1, high, animations);
  }
};

export {getQuickSortAnimations};
