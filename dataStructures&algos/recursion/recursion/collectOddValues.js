/*
// helper function recursive approach

function collectOddValues(arr) {
  let results = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      results.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return results;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]));

*/

// Pure Recursion

function collectOddValues(arr) {
  let results = [];

  if (arr.length === 0) {
    return results;
  }
  if (arr[0] % 2 !== 0) {
    results.push(arr[0]);
  }

  results = results.concat(collectOddValues(arr.slice(1)));
  return results;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6]));
