/**
 reverse
 Write a recursive function called reverse which accepts a string and returns a new string in reverse

 I: string
 O: new string in reverse
 C: recursively
 E: if its empty return ""
 */

function reverse(str) {
  // if the length is less than 1 return string
  if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'
