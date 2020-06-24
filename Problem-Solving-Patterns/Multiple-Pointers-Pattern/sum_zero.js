/* Sum Zero - Multiple Pointers Pattern

Instructions:
- Write a function called sumZero which accepts a sorted array of integers.
- The function should find the 1st pair where the sum is 0.
-Return an array that includes both values that sum to 0 or undefined if a pair does not exist */

/* Naive Solution Without Using the Multiple Pointers Pattern
Time Complexity: O(N^2)
Space Complexity: O(1) */
function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

/* Solution Using the Multiple Pointers Pattern
Time Complexity: O(N)
Space Complexity: O(1) */
function sumZero(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// TESTS
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); //[-2, 2]
console.log(sumZero([-10, -9, -7, -6, 2, 5, 6, 7])); //[-7, 7]
console.log(sumZero([-22, -20, -17, -12, 2, 9, 20, 21, 25])); //[-20, 20]
console.log(sumZero([-10, -9, 0, 1, 2, 3])); //undefined
