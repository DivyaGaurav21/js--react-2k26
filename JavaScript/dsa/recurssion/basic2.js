// Find (Power of Number) using Recursion

function findPower(x, n) {
  if (n === 0) {
    return 1;
  }
  return x * findPower(x, n - 1);
}

console.log(findPower(2, 4));

// 2^4 = 2 * 2^3
// 2^3 = 2 * 2^2
// 2^2 = 2 * 2^1
// 2^1 = 2 * 2^0
// 2^0 = 1

// Count Number of Digits using Recursion
// JavaScript Code
function numDigit(n) {
  if (n === 0) {
    return 0; // base case
  }

  let smallAns = numDigit(Math.floor(n / 10));
  return 1 + smallAns;
}

console.log(numDigit(12345));

// 12345 / 10 → 1234
// 1234 / 10 → 123
// 123 / 10 → 12
// 12 / 10 → 1
// 1 / 10 → 0
//Think on--
  // if (n === 0) return 1;   // handle 0
  // if (n < 10) return 1;    // base case