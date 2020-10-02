/*
Frequency Counter - Multiple Pointers - areThereDuplicates

implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any diplicates among the arguments passed in. You can solve this using the frequency counter pattern or the multiple Pointers pattern.

examples: 
console.log(areThereDuplicates(1,2,3)) //false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates("a","b","c","a")) // true


// Frequency pattern 
const areThereDuplicates = () => {
  let collection = {};
  
  for (let val in arguments) {
    collection[arguments[val]] = ++collection[arguments[val]] || 1;
  }
  
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
};
*/

// Two pointers
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
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

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
