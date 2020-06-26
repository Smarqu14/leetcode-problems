/**
 Naive Approach


 Write a function called same, whoch accepts two arrays/ The function should return true if every value
 in the array has its corresponding value squared int he second array. The frequency of values must be the same.

i: two arrays
o: boolean, if second array contains values from first array squared
C: none
e: none



TIME COMPLEXITY: 
O(N^2); we are looping and we also have a nested loop (indexOf)

 */

 /**
  * 
  * NAIVE SOLUTION - TIME COMPLEXITY O(N^2)
  * 
  
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (var i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2);
      // -1 means if its not in there 
      if (correctIndex === -1) {
        return false;
      }
      // this line removes the number from the array
      arr2.splice(correctIndex, 1);
    }
    return true;
  }
  
  console.log(same([1,2,3], [4,1,9])); // true
  console.log(same([1,2,3], [1,9])); //false
  console.log(same([1,2,1], [4,4,1])); //false (must be the same frequency)  
  
  
  */


  // TIME COMPLEXITY O(N)

  function same(arr1, arr2) {
    var obj1 = {};
    var obj2 = {};

    // good for arrays/strings
    for (var val of arr1) {
      obj1[val] = ++obj1[val] || 1;
    }
    
    // good for arrays/strings
    for (var val of arr2) {
      obj2[val] = ++obj2[val] || 1;
    }
    
    for (var key in obj1) {
      if (!(key ** 2 in obj2)) {
        return false;
      }
      if (obj2[key ** 2] !== obj1[key]) {
        return false;
      }
    }
    return true;
  }

  console.log(same([1,2,3,2], [9,1,4,4])); // true
  console.log(same([1,2,3], [1,9])); //false
  console.log(same([1,2,1], [4,4,1])); //false (must be the same frequency)  
