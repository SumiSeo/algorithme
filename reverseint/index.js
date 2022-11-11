// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverse = require("../reversestring");

// function reverseInt(n) {
//   if (n > 0) {
//     const intString = n + "";
//     return parseFloat(intString.split("").reverse().join(""));
//   } else if (n === 0) {
//     return 0;
//   } else {
//     const intString = n + "";
//     const str = intString.split("").reverse().join("");
//     const str2 = "-" + str;
//     return parseFloat(str2);
//   }
// }

// function reverseInt(n) {
//   const str = n + "";
//   return Math.sign(n) * parseInt(str.split("").reverse().join(""));
// }
function reverseInt(n) {
  return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

module.exports = reverseInt;
