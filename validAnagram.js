/**
 Given two strings, write a function to determine if the second string is an angram of the first.
 An anagram is a word, phrase, or name formed by rearranging the ltters of antoher, such as cinema,
 formed from iceman.
 */

 // Time Complexity O(n);
 // Solition 1

 /** 
  function validAnagram(str1, str2) {
    // return false if length isnt the same
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
     if (!(key in obj2)) {
       return false;
     }
     if (obj2[key] !== obj1[key]) {
       return false;
     }
   }
   return true;
  }
 
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

 console.log(validAnagram("","")) //true
 console.log(validAnagram("aaz","zza")) //false
 console.log(validAnagram("anagram","nagaram")) //true
 console.log(validAnagram("rat","car")) //false
 console.log(validAnagram("awesome","awesom")) //false
 console.log(validAnagram("steve","steve")) //true
 console.log(validAnagram("hello","hello")) //true