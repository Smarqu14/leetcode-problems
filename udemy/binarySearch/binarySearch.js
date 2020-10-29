//Binary Search
// only working with numbers
function binarySearch(arr, val) {
  // - create a left pointer at the start of the array and a right pointer at the end of the array
  let start = 0;
  let end = arr.length - 1;
  //- create  middle pointer
  let mid = Math.floor((start + end) / 2);
  //- If you find the value you want, return the index
  // - while the left pointer comes before the right pointer:
  while (arr[mid] !== val && start <= end) {
    //- If the value is too small, move the left pointer up
    if (val < arr[mid]) {
      end = mid - 1;
      //- if the value is too large, move the right pointer down
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  // - if you never find the value, return -1
  if (arr[mid] === val) {
    return mid;
  } else {
    return -1;
  }
}

console.log(binarySearch([2, 3, 4, 6, 8, 9, 9, 10, 22], 100));
