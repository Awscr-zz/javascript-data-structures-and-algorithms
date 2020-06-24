/* Max Subarray Sum - Sliding Window Pattern

Instructions:
- Write a function called maxSubarraySum, which accepts an array of integers and a number called n.
- The function should calculate the maximum sum of n consecutive elements in the array. */

/* Naive Solution Without Using the Sliding Window Pattern
Time Complexity: O(N^2) */
function naiveMaxSubArraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity,
    temp;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) max = temp;
  }

  return max;
}

/* Solution Using the Sliding Window Pattern
Time Complexity: O(N) */
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// TESTS
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
console.log(maxSubarraySum([], 4)); //null
