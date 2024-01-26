let firstNum = 3;
let secondNum = 4;
let sum = 4;
while(true) {
  let thirdNumber = firstNum + secondNum;

  if (thirdNumber > 7_000_000) break;
  if (thirdNumber % 2 === 0) sum += thirdNumber;

  [firstNum, secondNum] = [secondNum, thirdNumber];
}

console.log(sum)