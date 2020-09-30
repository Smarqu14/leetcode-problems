// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a wordm phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};

  for (let val of str1) {
    obj1[val] = ++obj1[val] || 1;
  }

  for (let val of str2) {
    obj2[val] = ++obj2[val] || 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('','')) //true
console.log(isAnagram("aaz", "zza")); //false
console.log(isAnagram('anagram','nagaram')) //true
console.log(isAnagram('rat','car')) //false
console.log(isAnagram('awesome','awesom')) //false
console.log(isAnagram('qwerty','qeywrt')) //true
console.log(isAnagram('texttwisttime','timetwisttext')) //true
