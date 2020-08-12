// Write a function that takes an array of characters and reverses the letters in place. ↴

function reverse(arrayOfChars) {
  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {
    // Swap characters
    console.log(leftIndex, "left");
    console.log(rightIndex, "right");

    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;
    console.log(arrayOfChars, "array");
    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
reverse(['e','m','p','t','y' ,'s','t','r','i','n','g'])



// My solution
function reverse(arrayOfChars) {
  // Reverse the input array of characters in place
  return arrayOfChars.reverse().join('');
}








