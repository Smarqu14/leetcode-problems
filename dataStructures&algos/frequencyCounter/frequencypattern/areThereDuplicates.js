/*
Frequency Counter - areThereDuplicates

Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the Frequency counter pattern or the multiple pointer patterns.

Examples: 
areThereDuplicates(1, 2, 3 )// false
areThereDuplicates(1, 2, 2)// true
areThereDuplicates('a', 'b', 'c', 'a')// true

restrictions :
Time Complexity o(n)
space Complexity o(n);

Bonus
time :O(n log n);
space: o(1)

I: multiple arguments 
O: boolean, checks for duplicates if there are return T else F
C: time complexity linear and space complexity linear
E: if no arguments return false
*/

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  // create obj storage
  let obj = {};
  for (let val in arguments) {
    // console.log(arguments, "LOOOPP OF ARGUMENTS");
    obj[arguments[val]] = ++obj[arguments[val]] || 1;
  }

  // itereate over arguments
  for (let val in obj) {
    if (obj[val] > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3, 2), "First"); // true
console.log(areThereDuplicates(), "second"); // false
console.log(areThereDuplicates(1, 2, 2), "third"); // true
console.log(areThereDuplicates("a", "b", "c", "a"), "fourth"); // true
