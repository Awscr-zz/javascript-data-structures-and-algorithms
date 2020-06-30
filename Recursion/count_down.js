/*Count Down - Recursion

Instructions: Create a function countDown which accepts a number and counts from that number down to 1 */

function countDown(num) {
  if (num === 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// TESTS
console.log(countDown(4)); //4 3 2 1 All done!
console.log(countDown(8)); //8 7 6 5 4 3 2 1 All done!
