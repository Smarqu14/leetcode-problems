/*
Recursive - Write a recursive function called isPalindrome which returns true if the string passed to its a palindrome (reads the same fowward and backward). Othewise return false;


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

*/

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length -1]) return false;

  return isPalindrome(str.slice(1, -1));
}