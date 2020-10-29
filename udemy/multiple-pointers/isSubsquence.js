/*
Multiple pointers = isSubsequence

Write a function called is isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewheere in the second string, without their order changing.

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

time complexicy: 0(n + m);
space complexity O(1);

const isSubsequence = (str1, str2) => {
  let first = 0;
  let second = 0;
  
  while (second < str2.length) {
    if (str1[first] === str2[second]) first++;
    if (first === str1.length) {
      return true;
    }
    second++;
  }
  return false;
};
*/

// recursively
const isSubsequence = (str1, str2) => {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
