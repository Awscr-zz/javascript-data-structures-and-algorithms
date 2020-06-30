/* Average Pair - Multiple Pointers Pattern

Instructions: 
- Write a function called averagePair
- Given a sorted array of integers and a target average, determine if there is a pair of values in the 
array where the average of the pair equals the target average
- There may be more than 1 pair that matches the average target

Time Complexity: O(N)
Space Complexity: O(1) */

function averagePair(arr, targetAverage) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let currentAvg = (arr[left] + arr[right]) / 2;

    if (currentAvg === targetAverage) {
      return true;
    } else if (currentAvg < targetAverage) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

// TESTS
console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false
