/*Frequency Counter - sameFrequency

write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Your solution MUST have the following complexities.

Time: O(N)
same

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

*/

const sameFrequency = (num1, num2) => {
  let number1 = String(num1);
  let number2 = String(num2);
  let lookup = {};

  if (number1.length !== number2.length) {
    return false;
  }

  for (let num of number1) {
    lookup[num] = ++lookup[num] || 1;
  }

  for (let i = 0; i < number2.length; i++) {
    let val = number2[i];

    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
