// Write a function called `filterByLength` that takes an array of strings and 
// a number as input and returns an array of all the strings in the input array
//  whose length is greater than or equal to the input number

// const arr = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(filterByLength(arr, 6));
// ["banana", "cherry", "elderberry"]


const arr = ["apple", "banana", "cherry", "date", "elderberry"];


function filterByLength(arr, length) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= length) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const filteredArr = filterByLength(arr, 6);
console.log(filteredArr);