/* Selection Sort

Time Complexity (all cases): O(n^2) */

function selectionSort(arr) {
  let min, temp;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([4, 2, 19, 20, 6, 7])); //[2, 4, 6, 7, 19, 20]
