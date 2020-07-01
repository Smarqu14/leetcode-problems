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

function areThereDuplicates(...args) {
  args.sort((a, b) => a - b);
  
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
console.log(areThereDuplicates(1, 2, 3, 2), "First"); // true
console.log(areThereDuplicates(), "second"); // false
console.log(areThereDuplicates(1, 2, 2), "third"); // true
console.log(areThereDuplicates("a", "b", "c", "a"), "fourth"); // true
