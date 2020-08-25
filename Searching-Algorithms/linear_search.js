/* Linear Search

Time Complexity: O(N)
Space Complexity: O(1)

Instructions: 
- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1
*/

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

// TESTS
console.log(linearSearch([1, 2, 3, 4], 1)); //0
console.log(linearSearch(['tree', 'apple', 1, 'father'], 'despacito')); //-1
console.log(linearSearch([1, 10, 21, 'candy'], 'candy')); //3
