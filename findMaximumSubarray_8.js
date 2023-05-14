// Write a function called `findMaximumSubarray` that takes an array of
//  integers as input and returns the maximum sum of any contiguous subarray within the input array.
// ```js
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(findMaximumSubarray(arr));
// 6 // the maximum sum subarray is [4, -1, 2, 1]
// ```

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


function findMaximumSubarray(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }
  

  console.log(findMaximumSubarray(arr));