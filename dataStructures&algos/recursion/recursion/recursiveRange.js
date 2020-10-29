/* 
recursiveRange - 
Write a function called recursiveRange which accepts a number and
adds up all the numbers from 0 to the number passed to the funtion.


// SAMPLE INPUT/OUTPUT
/



I: accepts a number 
O: sum of the sequential numbers up the input 
C: None 
E: If number is 0 
  If number is negative 
*/

function recursiveRange(num) {
  if (num === 1) {
    return 1;
  }
  let sum = num;

  return sum + recursiveRange(num - 1);
}
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

/*
function recursiveRange(x){
  if (x === 0 ) return 0;
  return x + recursiveRange(x-1);
}
*/
