/* String Search

Directions:
- Define a function that accepts 2 strings, a pattern that we are looking for and the larger string 
- Loop over each character of the longer string
- Loop over each character of the pattern
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count */

function naiveStringSearch(str, pattern) {
  let matches = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break;
      if (j === pattern.length - 1) matches++;
    }
  }
  return matches;
}

console.log(naiveStringSearch('hello', 'he')); //1
console.log(naiveStringSearch('train', 'rain')); //1
console.log(naiveStringSearch('train', 'rap')); //0
