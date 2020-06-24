/* Anagram - Frequency Counter Pattern

Instructions: 
- Given 2 strings, write a function to determine if the 2nd string is an anagram of the 1st. 
- An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.*/

// Solution Using the Frequency Counter Pattern
function validAnigram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let currentLetter = str1[i];

    lookup[currentLetter]
      ? (lookup[currentLetter] += 1)
      : (lookup[currentLetter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// TESTS
console.log(validAnigram('', '')); //true
console.log(validAnigram('aaz', 'zza')); //false
console.log(validAnigram('awesome', 'awesom')); // false
console.log(validAnigram('qwerty', 'ytrewq')); //true
console.log(validAnigram('arc', 'car')); // true
