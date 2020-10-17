/*Recursion
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - Do not worry about negative bases and exponents


const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  }
  
  return base * power(base, exponent - 1) ;
  
}; 

O(n);
*/

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  } else if (exponent % 2 === 0) {
    let y = power(base, exponent / 2);
    return y * y;
  } else {
    return base * power(base, exponent - 1);
  }
};

//O(log n)
