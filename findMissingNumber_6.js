// Write a function called `findMissingNumber` that takes an array of 
// integers from 1 to n with one number missing and returns the missing number.

// const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// console.log(findMissingNumber(arr));
// 4

const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
      arrSum += arr[i];
    }
    return sum - arrSum;
  }
  
  console.log(findMissingNumber(arr));