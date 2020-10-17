/* 
Recursion- Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

const productOfArray = (nums) => {
  if (nums.length === 0) {
    return 1;
  }

  return nums.shift() * productOfArray(nums);
};

