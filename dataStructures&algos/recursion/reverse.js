/*
Recursive - Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

// Solution 1
function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
};


// Solution 2
function reverse(str) {
  if (str === "") {
    return "";
  }
  return reverse(str.substr(1)) + str[0];
  //return reverse(str.substr(1)) + str.chartAt(0);
  
};