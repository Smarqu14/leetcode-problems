const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // if they are not the same we set arr[i] = arr[j]
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
//i
//1,1,2,2,3,3,4,5,5,6,7,7,7]
//  j
console.log(countUniqueValues([1, 2, 3, 4, 5, 6]));
console.log(countUniqueValues([]));
