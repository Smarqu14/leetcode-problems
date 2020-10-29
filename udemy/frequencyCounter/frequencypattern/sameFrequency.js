/**
 Frequency Counter - sameFrequency
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Your solution MUST have the following complexitities.

 TIME O(N)

 Examples: 

 sameFrequency(182, 281) // true
 sameFrequency(34, 13) // false
 sameFrequency(3589578, 5879385) // true
 sameFrequency(22, 222) // false


I: two numbers
O: boolean, Compare if they both have the same digits
C: Time complexity O(linear) 
E: different length for both, empty numbers? 

 */

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  // turn into strings
  const numOne = num1.toString();
  const numTwo = num2.toString();
  // return false if lengths dont match
  if (numOne.length !== numTwo.length) {
    return false;
  }
  let obj1 = {};
  // store num1 eles in an object
  for (let value of numOne) {
    obj1[value] = ++obj1[value] || 1;
  }
  // iterate over num2 and check if those values are found in obj1
  for (let i = 0; i < numTwo.length; i++) {
    if (obj1[numTwo[i]] === undefined) {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 13)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
