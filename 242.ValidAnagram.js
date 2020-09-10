// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]] === undefined) {
      obj1[s[i]] = 1;
    } else {
      obj1[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let letter = t[i];

    if (!obj1[letter]) {
      return false;
    } else {
      obj1[letter] -= 1;
    }
  }
  return true;
};
