// Q 1 .
//  Write a function called `countOccurrences` that takes an array of numbers
//  and a number as input and returns the number of times the input number occurs in the array.
// ```js
// const arr = [4, 2, 6, 8, 4, 1, 4];
// console.log(countOccurrences(arr, 4));

 const arr = [4, 2, 6, 8, 4, 1, 4];

function countOccurrences(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count++;
      }
    }
    return count;
  }

const occurrences = countOccurrences(arr, 4);

console.log(`The number ${4} occurs ${occurrences} times in the array.`);
