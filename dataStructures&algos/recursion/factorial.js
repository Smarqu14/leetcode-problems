/*Recursion - Write a funciton factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integer bellow it; Factorial four (4!) is equal to 24 because 4 * 3 * 2 * 1 equals 24. Factorial zero (0!) is always 1.

*/

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
// O(n)


