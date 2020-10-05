/*
Sliding window - maxSubarraySum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example bellow, [100, 200, 300] is a subarray of the original array, but [100, 300] is not


console.log(maxSubarraySum([100,200,300,400],2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); //5
console.log(maxSubarraySum([2,3], 3)); //null
*/

function maxSubarraySum(array, num) {
  let tempSum = 0;
  let maxSum = 0;

  if (array.length < num) return null;

  // we gather the maxSum of the first numbers depending on the num,
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  // we set the tempSum variable = to maxSum
  tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); // 5