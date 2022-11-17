// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let stair = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += "#";
//       } else stair += " ";
//     }
//     console.log(stair);
//   }
// }

// function steps(n, row = 0, stair = "") {}
// function steps(n) {
//   //draw the question ->for lopp
//   for (let row = 0; row < n; row++) {
//     let step = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         step += "#";
//       } else step += " ";
//     }
//     console.log(step);
//   }

//   //find the rules ->if statement

//   //solve the problem -> return what ?
//   return;
// }
function steps(n) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        step += "#";
      } else step += " ";
    }
    console.log(step);
  }
}

module.exports = steps;
