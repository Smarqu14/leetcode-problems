/*
Given an array of integers and a number, write a function called subarraySumMax, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example, [100, 200, 300] is a subarray of the original array, but [100, 300] is not. 

subarraySumMax([100, 200, 300, 400], 2); // 700
subarraySumMax([1, 4, 2, 10, 23, 3, 1, 0, 20]); // 39
subarraySumMax([-3, 4,0,-2,6,-1], 2); // 5 
subarraySumMax([2,3], 3); // null

I: array, integer
O: max sum of subarray of integer numbers passed into function
C: time complexity linear
e: if array.length is not same as integer return null
*/

function subarraySumMax(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(subarraySumMax([100, 200, 300, 400], 2)); // 700
console.log(subarraySumMax([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(subarraySumMax([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(subarraySumMax([2, 3], 3)); // null
