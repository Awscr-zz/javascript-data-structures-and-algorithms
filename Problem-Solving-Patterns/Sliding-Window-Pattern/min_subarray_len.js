/* Min Subarray Len - Sliding Window Pattern

Instructions:
- Write a function called minSubarrayLen which accepts an array of positive ints and a positive int
- This function should return the minimal length of a contiguous subarray of which the sum is greater
than or equal to the integer passed to the function, if there isn't one, return 0 instead

Time Complexity: O(N)
Space Complexity: O(1) */

function minSubarrayLen(nums, sum) {
  let total = 0,
    start = 0,
    end = 0,
    minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// TESTS
console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); //2 - [4, 3] is the smallest subarray
console.log(minSubarrayLen([2, 1, 6, 5, 4], 9)); //2 - [5, 4] is the smallest subarray
console.log(minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); //1 - [62] is greater than 52
console.log(minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11)); //2
