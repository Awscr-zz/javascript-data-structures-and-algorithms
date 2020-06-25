/* Same Frequency - Frequency Counter Pattern

Instructions:
- Write a function called sameFrequency
- Given 2 positive integers, find out if the 2 numbers have the same frequency of digits
- Your solution MUST have a time complexity of O(N)
*/

function sameFrequency(int1, int2) {
  const strInt1 = String(int1),
    strInt2 = String(int2);

  if (strInt1.length !== strInt2.length) return false;

  const lookup = {};

  for (let i = 0; i < strInt1.length; i++) {
    let currentDigit = strInt1[i];

    lookup[currentDigit]
      ? (lookup[currentDigit] += 1)
      : (lookup[currentDigit] = 1);
  }

  for (let i = 0; i < strInt2.length; i++) {
    let currentDigit = strInt2[i];

    if (!lookup[currentDigit]) {
      return false;
    } else {
      lookup[currentDigit] -= 1;
    }
  }

  return true;
}

// TESTS
console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
