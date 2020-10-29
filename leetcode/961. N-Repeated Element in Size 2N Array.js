// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

 

// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5
 

// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even

var repeatedNTimes = function(A) {
  let obj = {};
  let maxValue = 0;
  let keyValue;  
 
    
    for (let i = 0; i < A.length; i++) {
        let val = A[i];
        obj[val] = ++obj[val] || 1;
    }
    
    
  for (let key in obj) {
    
    let temp = obj[key];
      if (maxValue < temp) {
          maxValue = temp;
          keyValue = key;
      }
  }
    return keyValue;
};