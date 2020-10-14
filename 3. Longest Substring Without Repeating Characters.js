/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

// using a for loop
var lengthOfLongestSubstring = function(s) {
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
*/

function lengthOfLongestSubstring(str) {
  if (str.length === 0 || str === null) return 0;

  let set = new Set();
  let left = 0;
  let right = 0;
  let maxSubstringLength = 0;

  while (right < str.length) {
    if (!set.has(str.charAt(right))) {
      set.add(str.charAt(right));
      maxSubstringLength = Math.max(maxSubstringLength, set.size);
      right++;
    } else {
      set.delete(str.charAt(left));
      left++;
    }
  }
  return maxSubstringLength;
}
