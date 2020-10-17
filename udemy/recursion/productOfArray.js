/* 
Recursion- Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// Solution 1
const productOfArray = (nums) => {
  if (nums.length === 0) {
    return 1;
  }
  
  return nums.shift() * productOfArray(nums);
};
*/

// Solution 2

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
