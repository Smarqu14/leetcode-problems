/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
After doing so, return the array. 


Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5

*/
/*
  @param {number[]} arr
  @return {number[]}
 */

let replaceElements = function (arr) {
  let highest = arr[arr.length - 1];
  let prevHighest;

  for (let i = arr.length - 2; i >= 0; i--) {
    prevHighest = highest;

    if (arr[i] > highest) {
      highest = arr[i];
    }

    arr[i] = prevHighest;
  }
  arr[arr.length - 1] = -1;
  return arr;
};
