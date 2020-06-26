/**
 Write a function called same, whoch accepts two arrays/ The function should return true if every value
 in the array has its corresponding value squared int he second array. The frequency of values must be the same.

i: two arrays
o: boolean, if second array contains values from first array squared
C: none
e: none
 */

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
