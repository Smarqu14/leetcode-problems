/*
Multiple pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals to the target average. There may be more than one pair that matches the average target.

Bonus constraints: 
Time(O(N))

SpaceO(1);

averagePair([1,2,3], 2.5) // True
averagePair([1,3,3,5,6,7,10,12,19], 8) //true
averagePair([-1, 0, 3, 4,5,6], 4.1) //false
averagePair([0], 4) //false

*/

const averagePair = (array, targetAverage) => {
  let first = 0;
  let last = array.length -1;

  while (first <= last) {
    let average = (array[first] + array[last]) / 2;
    
    if (average === targetAverage) {
      return true;
    } else if (average < targetAverage){
      first++;
    } else {
      last--;
    }
  }
  return false;
}

console.log(averagePair([1,2,3], 2.5)) // True
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) //true
console.log(averagePair([-1, 0, 3, 4,5,6], 4.1)) //false
console.log(averagePair([0], 4)) //false