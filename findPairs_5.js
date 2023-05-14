// Write a function called `findPairs` that takes an array of integers
//  and a number as input and returns an array of all pairs of integers
//   in the input array whose sum is equal to the input number.
// ```js
// const arr = [3, 4, 6, 8, 1, 2, 9];
// console.log(findPairs(arr, 10));
// [[3, 7], [4, 6], [8, 2], [1, 9]]

const arr = [3, 4, 6, 8, 1, 2, 9];

function findPairs(arr, target) {
    const pairs = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
    return pairs;
  }
  
console.log(findPairs(arr, 10));
// Output: [[3, 7], [4, 6], [8, 2], [1, 9]]


