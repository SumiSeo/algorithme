// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const chars = {};
//   //   let objs = [];
//   let max = 0;
//   let maxChar = "";
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }

//   console.log(chars);

//   //   for (let [k, o] of Object.entries(chars)) {
//   //     objs.push(o);
//   //     const maxNum = Math.max(...objs);
//   //     if (maxNum === o) {
//   //       return k;
//   //     }
//   //   }
//   for (let c in chars) {
//     if (chars[c] > max) {
//       max = chars[c];
//       maxChar = c;
//     }
//     return maxChar;
//   }
// }

// function maxChar(str) {
//   const charObj = {};
//   for (let char of str) {
//     charObj[char] = charObj[char] + 1 || 1;
//   }
//   const arr = Object.values(charObj);
//   return Object.keys(charObj).find((c) => charObj[c] === Math.max(...arr));
// }
function maxChar(str) {
  const charObj = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  // const arr = Object.values(charObj);
  // return Object.keys(charObj).find((c) => charObj[c] === Math.max(...arr));

  for (let char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}
module.exports = maxChar;
