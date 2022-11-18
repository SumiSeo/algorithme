// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

function vowels(str) {
  const vowels = "aeiou";
  return str
    .split(" ")
    .join("")
    .toLowerCase()
    .split("")
    .filter((s) => vowels.split("").indexOf(s) !== -1).length;
}

// function vowels(str) {
//     let answer = 0;
//     const vowel = ["a", "e", "i", "o", "u"];
//     const refinedStr = str.toLowerCase().split("");
//     refinedStr.forEach((s) => {
//       console.log(s);
//       if (vowel.includes(s)) {
//         answer++;
//       }
//     });
//     return answer;
//   }

module.exports = vowels;
