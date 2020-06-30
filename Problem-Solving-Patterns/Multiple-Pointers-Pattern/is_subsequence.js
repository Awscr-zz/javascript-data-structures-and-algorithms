/* Is Subsequence - Multiple Pointers Pattern

Instructions: 
- Write a function called isSubsequence which takes in 2 strings and checks whether the characters in the
1st string form a subsequence of the characters in the 2nd string
- In other words, the function should check whether the characters in the 1st string appear somewhere
in the 2nd string, WITHOUT CHANGING THEIR ORDER

Time Complexity: O(N + M)
Space Complexity: O(1) */

function isSubsequence(str1, str2) {
  let i = 0,
    j = 0;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;

    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// TESTS
console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'string')); //true
console.log(isSubsequence('abc', 'acb')); //false
console.log(isSubsequence('face', 'facebook')); //true
