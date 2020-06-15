type animationObject = {
  scanArea: {
    start: number;
    end: number;
  };
  offset: number;
  animations: number[];
};

type mergeReturnObject = {
  mergedArray: number[];
  animations: number[];
};

const getMergeSortAnimations = (arr: number[]): animationObject[] => {
  let animArr: animationObject[];
  animArr = [];
  mergeSort(arr, 0, animArr);
  return animArr;
};

const mergeSort = (
  arr: number[],
  realStart: number,
  animArr: animationObject[],
): number[] => {
  let start: number, mid: number, end: number;
  start = 0;
  end = arr.length;
  mid = Math.floor((start + end) / 2);

  let animateObject: animationObject;
  animateObject = {
    scanArea: {start: realStart, end: end + realStart},
    offset: realStart,
    animations: [],
  };
  animArr.push(animateObject);

  if (end === 1) {
    return arr;
  }

  let {mergedArray, animations} = merge(
    mergeSort(arr.slice(start, mid), realStart, animArr),
    mergeSort(arr.slice(mid, end), realStart + mid, animArr),
  );

  animateObject = {
    scanArea: {start: realStart, end: end + realStart},
    offset: realStart,
    animations: animations,
  };

  animArr.push(animateObject);

  return mergedArray;
};

const merge = (arr1: number[], arr2: number[]): mergeReturnObject => {
  let i: number, j: number, k: number, len1: number, len2: number;
  i = j = k = 0;
  len1 = arr1.length;
  len2 = arr2.length;

  let mergedArray: number[] = [];

  let animations: number[] = [];
  let animationsCounter: number = 0;

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      mergedArray[k] = arr1[i];
      animations.push(i);
      animations.push(animationsCounter);
      i++;
      k++;
      animationsCounter++;
    } else {
      mergedArray[k] = arr2[j];
      animations.push(j + len1);
      animations.push(animationsCounter);
      j++;
      k++;
      animationsCounter++;
    }
  }

  while (i < len1) {
    mergedArray[k] = arr1[i];
    animations.push(i);
    animations.push(animationsCounter);
    i++;
    k++;
    animationsCounter++;
  }

  while (j < len2) {
    mergedArray[k] = arr2[j];
    animations.push(j + len1);
    animations.push(animationsCounter);
    j++;
    k++;
    animationsCounter++;
  }

  return {mergedArray: mergedArray, animations: mergedArray};
};

export {getMergeSortAnimations};
