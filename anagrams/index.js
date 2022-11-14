// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }
function anagrams(stringA, stringB) {
  const a = cleanString(stringA);
  const b = cleanString(stringB);

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (let char in a) {
    if (a[char] !== b[char]) {
      return false;
    }
  }
  return true;
}

function cleanString(str) {
  const obj = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
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
