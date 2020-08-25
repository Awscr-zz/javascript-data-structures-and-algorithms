/* Bubble Sort 

Time Complexity (average/worst case): O(n^2)
Time Complexity (best case): O(n) */

function bubbleSort(arr) {
  let noSwaps = true,
    temp;

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([37, 45, 29, 8])); //[8, 29, 37, 45]
