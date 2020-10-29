/*
Recursive- someRecursive

write a function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

*/

const someRecursive = (arr, cb) => {
  if (arr.length <= 1) return false;
  return cb(arr.pop()) || someRecursive(arr.slice(1), cb);
}