/*
Power- Write a function called power which accepts a base and an exponent. This function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - Do not worry about negative bases and exponents.
Examples: 

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16


I: two integers. The whole number and the exponent(powerof)
O: Return the total of base^num
C: None
E: any exponent to 0 is equal to 1
  base is 0 anything is equal to 0
*/
// 3 ^ 3 = 3 * 3 * 3 = 27;
// 5 ^ 2 = 5 * 5 = 25;

function power(base, exponent) {
  // base : when exponent is equal to 1 stop function
  if (exponent === 0) {
    return 1;
  }

  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
debugger;
console.log(power(5, 3));
