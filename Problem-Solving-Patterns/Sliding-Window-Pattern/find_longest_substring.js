/* Find Longest Substring - Sliding Window Pattern

Instructions:
- Write a function called findLongestSubstring which accepts a string and returns the length of the 
longest substring with all distinct characters

Time Complexity: O(N) */

function findLongestSubstring(str) {
  let longest = 0,
    seen = {},
    start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);

    seen[char] = i + 1;
  }

  return longest;
}

// TESTS
console.log(findLongestSubstring('')); //0
console.log(findLongestSubstring('rithmschool')); //7
console.log(findLongestSubstring('thisisawesome')); //6
console.log(findLongestSubstring('thecatinthehat')); //7
console.log(findLongestSubstring('bbbbb')); //1
console.log(findLongestSubstring('longestsubstring')); //8
console.log(findLongestSubstring('thisishowwedoit')); //6
