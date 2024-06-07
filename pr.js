let input = prompt("enter input");
let inptArr = input.split("");

let wenlymove = 0;
let bobMove = 0;
for (let i = 1; i < inptArr.length; i++) {
  if (inptArr[i] === "w") {
    if (inptArr[i] == inptArr[i - 1] && inptArr[i] === inptArr[i + 1]) {
      wenlymove++;
    }
  } else if (inptArr[i] === "b") {
    if (inptArr[i] == inptArr[i - 1] && inptArr[i] === inptArr[i + 1]) {
      bobMove++;
    }
  }
}
console.log(wenlymove, bobMove);
if (wenlymove > bobMove) {
  console.log("wenly Win");
} else {
  console.log("bob Win");
}
