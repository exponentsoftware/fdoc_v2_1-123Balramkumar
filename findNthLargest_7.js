// Write a function called `findNthLargest` that takes an array of numbers and 
// a number n as input and returns the nth largest number in the array.
// ```js
// const arr = [3, 1, 7, 4, 5];
// console.log(findNthLargest(arr, 3));
// 4.

const arr = [3, 1, 7, 4, 5];

function findNthLargest(arr, n) {
    for (let i = 0; i < n; i++) {
      let max = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[max]) {
          max = j;
        }
      }
      [arr[i], arr[max]] = [arr[max], arr[i]]; // swap elements
    }
    return arr[n - 1];
  }

  console.log(findNthLargest(arr, 3));