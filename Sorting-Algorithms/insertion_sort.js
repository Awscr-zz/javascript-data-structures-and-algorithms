/* Insertion Sort

Time Complexity: O(n^2) */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (let j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      [arr[j], arr[j + 1]] = [currentVal, arr[j]];
    }
  }
  return arr;
}

console.log(insertionSort([3, 1, 2])); //[1, 2, 3]
console.log(insertionSort([2, 1, 9, 76, 4])); //[1, 2, 4, 9, 76]
console.log(insertionSort([1, 2, 23, -1, 4])); //[-1, 1, 2, 4, 23]
console.log(insertionSort([3, 56, 55, 100, -1, 0, 1, 2])); //[-1, 0, 1, 2, 3, 55, 56, 100]
