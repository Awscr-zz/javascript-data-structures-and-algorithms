/* Helper method - Recursion

Instructions: Implement a helper method inside a function collectOddValues which accepts an array of numbers and returns */

function collectOddValues(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(nums);

  return result;
}

// TESTS
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[1, 3, 5, 7, 9]
console.log(collectOddValues([1, 4, 7, 10, 23, 43, 100, 111])); //[1, 7, 23, 43, 111]
