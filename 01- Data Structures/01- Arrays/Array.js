// Operations & Properties
const arr = [1, 2, 3, 4];

// adding element
arr.push(5); // O(1)
console.log(arr); // [1, 2, 3, 4, 5]
arr.unshift(0); // O(n)
console.log(arr); // [0, 1, 2, 3, 4 ]
console.log(arr); // [0, 1, 2,  3, 4,5]

// removing element
arr.pop(); // O(1)
console.log(arr); // [0,1, 2, 3, 4]
arr.shift(); // O(n)
console.log(arr); // [1, 2, 3, 4]

// adding & removing elements form specific index:
let myNum = [1, 2, 5, 6];
newArr = [3, 4];
myNum.splice(2, 0, ...newArr);
console.log(myNum); //[1, 2, 3, 4, 5, 6]
myNum.splice(2, 3);
console.log(myNum); //[1, 2, 6];

//* Dynamic vs Static Array
const staticArr = new Array(7);
staticArr.push(8);
console.log(staticArr.length); //7

// Dynamic (Resizable) Arrays:
// eg. as usual array
const dynamicArr = [];
dynamicArr.push(1);
dynamicArr.push(2, 3, "Four");

console.log(dynamicArr); // [1, 2, 3, 'Four']

// Accessing and Writing Array Elements
let num = [];
for (let i = 0; i < 10; i++) {
  num.push(i);
}

console.log(num);
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbers = [4, 6, 2, 3, 5, 8];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 28

// searching for a element:
let names = ["Ram", "Shyam", "Hari"];

function searchName(name) {
  let position = names.indexOf(name);
  if (position >= 0) {
    console.log(`${name} found at index:${position}`);
  } else {
    console.log(`${name} not found`);
  }
}

searchName("Ram"); // Ram found at index:0
searchName("Shyam"); // Shyam found at index:0
searchName("sita"); // Sita not found

function findMaxNum(arr) {
  if (arr.length === 0) {
    return "Oops, This is an empty array !!";
  }

  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(findMaxNum([2, 1, 5, 20, 32, 0])); //32
