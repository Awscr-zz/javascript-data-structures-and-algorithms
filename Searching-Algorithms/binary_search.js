/* Binary Search

Time Complexity: 
  - Worst and Average Case: O(log N)
  - Best Case: O(1)
Space Complexity:

Instructions:
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value that you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
  - If you never find the value, return - 1 */

function binarySearch(arr, val) {
  let start = 0,
    end = arr.length - 1,
    mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === val ? mid : -1;
}

// TESTS
console.log(binarySearch([1, 2, 6, 8, 10, 11, 15, 20, 21, 22, 23], 6)); //2
console.log(binarySearch([2, 22, 33, 44, 55, 66, 70, 77, 100], 22)); //1
console.log(binarySearch([1, 2, 3, 4, 55, 66, 77, 80, 81], 80)); //7
console.log(binarySearch([4, 5, 6, 7, 8], 2)); //-1
console.log(binarySearch([], 1)); //-1
