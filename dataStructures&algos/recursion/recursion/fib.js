/*
fib - write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the Fibonnacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ....
which starts with 1 and 1, and where every number after is equal to the sum of the previous two numbers


// fib(4) // 3
1,1,2,3 
// fib(10) // 55
1,1,2,3,5,8,13, 21,34,55
// fib(28) // 317811

// fib(35) // 9227465

I: num
O: the sum of the previous two numbers until input (length)
C: recursively
E: if (0) return 0
*/

function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811

console.log(fib(35)); // 9227465
