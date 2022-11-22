// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// function memoize(fn) {
//   //declare some storage area
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const result = fn.apply(this, args);
//     cache[args] = result;
//     return result;
//   };
// }

// const fib = memoize(slowFib);
function fib(n) {
  const arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 0; i < n + 1; i++) {
    if (i !== 0 && i !== 1) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[n];
}

module.exports = fib;
