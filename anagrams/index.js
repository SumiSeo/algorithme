// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const objOfStringA = makeObj(stringA);
//   const objOfStringB = makeObj(stringB);
//   const numOfKeysA = Object.keys(objOfStringA).length;
//   const numOfKeysB = Object.keys(objOfStringB).length;

//   if (numOfKeysA !== numOfKeysB) {
//     return false;
//   }
//   for (let char in objOfStringA) {
//     if (objOfStringA[char] !== objOfStringB[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function makeObj(string) {
//   const objOfString = {};
//   for (str of string.replace(/[^\w]/g, "").toLowerCase()) {
//     objOfString[str] = objOfString[str] + 1 || 1;
//   }
//   return objOfString;
// }
