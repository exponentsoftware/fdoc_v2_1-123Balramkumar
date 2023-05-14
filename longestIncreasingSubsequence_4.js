// Write a function called `longestIncreasingSubsequence` that takes an 
// array of numbers as input and returns the length of the longest 
// increasing subsequence in the array. A subsequence is a sequence that
//  can be derived from another sequence by deleting some or no elements 
//  without changing the order of the remaining elements

// const arr = [1, 4, 2, 5, 3];
// console.log(longestIncreasingSubsequence(arr));
// 3 the longest increasing subsequence is [1, 4, 5]

 
 const arr = [1, 4, 2, 5, 3];

 function longestIncreasingSubsequence(nums) {
    if (nums.length === 0) {
      return 0;
    }
    const dp = new Array(nums.length).fill(1);
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
          max = Math.max(max, dp[i]);
        }
      }
    }
    return max;
  }
  
console.log(longestIncreasingSubsequence(arr));
