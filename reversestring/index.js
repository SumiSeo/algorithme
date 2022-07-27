// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   console.log("hi");
//   debugger;
//   return str.split("").reduce((p, cur) => cur + p, "");
// }
function reverse(str) {
  let reversed = "";
  for (let c of str) {
    reversed = c + reversed;
    debugger;
  }
}

reverse("asdf");

module.exports = reverse;
