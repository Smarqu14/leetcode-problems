/*
productOfArray - Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

I: array
O: return product of all
C: recursive
E: empty array return 0; 


function productOfArray(arr) {
  let total = 1;
  
  function helper(arrInput) {
    if (arrInput.length === 0) {
      return 1;
    }
    total *= arrInput[0];
    helper(arrInput.slice(1));
  }
  
  helper(arr);
  return total;
}
*/
function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
