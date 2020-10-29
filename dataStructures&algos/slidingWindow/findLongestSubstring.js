/*
sliding Window - findLongestSubstring

write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

console.log(findLongestSubstring(""))//0
console.log(findLongestSubstring("rithmschool"))// 7
console.log(findLongestSubstring("thisisawesome"))//6
console.log(findLongestSubstring("thecatinthehat"))//7
console.log(findLongestSubstring("bbbbbb"))//b
console.log(findLongestSubstring("longestsubstring"))//8
console.log(findLongestSubstring("thisishowwedoit"))//6


*/


  var findLongestSubstring = function(s) {
    if (s.length === 0 || s === null) {
        return 0;
    }
    
    let seen = {};
    let start = 0;
    let substring = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        substring = Math.max(substring, i - start + 1);
        seen[char] = i + 1;
    }
    return substring;
}
  
