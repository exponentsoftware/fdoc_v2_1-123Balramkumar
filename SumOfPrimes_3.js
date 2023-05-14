// Write a function called `sumOfPrimes` that takes a number as input and returns the sum 
// of all prime numbers less than or equal to the input number.

// console.log(sumOfPrimes(10));
// 17 // 2 + 3 + 5 + 7 = 17

function sumOfPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
  
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(sumOfPrimes(10));

    