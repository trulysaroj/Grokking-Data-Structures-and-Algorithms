//* P1. Reverse a Array's elements (Simple one)

function reverseArr(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverseArr([3, 4, 5, 6, 7]));
