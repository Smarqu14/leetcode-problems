/*
Multiple Pointers - averagePair

write a function called averagePair - Given a sorted array of integers and a target average, 
determined if there is a pair of values in the array where the average of the pair equals to the target value. There may be more than one pair that matchets the avarage target.

Bonus Constraints :
Time: o(n)
space: o(1)

sample input:
  averagePair([1,2,3], 2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19], 8)//true
  averagePair([-1, 0, 3, 4, 5, 6], 4.1)// false
  averagePair([], 4)// false

  I: array, target average
  O: boolean, pair if values === target average
  C: linear complexity
  E: none
  */

function averagePair(arr, average) {
  if (arr.length === 0) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === average) {
      return true;
    } else if (avg < average) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
