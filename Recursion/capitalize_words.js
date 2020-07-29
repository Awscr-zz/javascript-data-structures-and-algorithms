/* Capitalize Words - Recursion

Instructions: 
- Write a recursive function called capitalizeWords
- Given an array of words, return a new array containing each word capitalized */

function capitalizeWords(words) {
  if (words.length === 1) return [words[0].toUpperCase()];

  let res = capitalizeWords(words.slice(0, -1));
  res.push(words.slice(words.length - 1)[0].toUpperCase());

  return res;
}

// TESTS
console.log(capitalizeWords(['taco', 'tree', 'ApPle'])); //['TACO', 'TREE', 'APPLE']
console.log(capitalizeWords(['HELLO', 'there', 'MY', 'name'])); //['HELLO', 'THERE', 'MY', 'NAME']
console.log(capitalizeWords(['frodo', 'GandALF', 'Smeagol'])); //['FRODO', 'GANDALF', 'SMEAGOL']
