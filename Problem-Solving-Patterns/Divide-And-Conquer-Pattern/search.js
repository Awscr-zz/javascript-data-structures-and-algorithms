/* Search - Divide and Conquer Pattern

Instructions:
- Given a sorted array of integers, write a function called search, that accepts a value and returns 
the index where the value passed to the function is located
- If the value is not found, return -1 */

/* Naive Solution Without Using the Divide and Conquer Pattern
Linear Search Example
Time Complexity: O(N) */
function naiveSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

/* Solution Using the Divide and Conquer Pattern
Binary Search Example
Time Complexity: log(N) */
function search(arr, val) {
  let min = 0,
    max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2),
      currentElement = arr[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
}

// TESTS
console.log(naiveSearch([1, 2, 3, 4, 5, 6, 7, 8], 2)); //1
console.log(naiveSearch([1, 2, 5, 10, 21, 22], 21)); //4
console.log(naiveSearch([1, 2, 5, 10], 6)); //-1
