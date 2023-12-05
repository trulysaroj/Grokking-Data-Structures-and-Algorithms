
//------------------------------------------------------------------------------------------------------------------- 

// Problem related with Arrays


//* P1. Reverse a Array's elements (Simple one)

function reverseArr(arr) {
    let reversedArr = [];
    for(let i = arr.length -1; i >=0; i--) {
      reversedArr.push(arr[i])
    }
     return reversedArr; 
  }
  
console.log(reverseArr([3, 4, 5, 6, 7]));



//------------------------------------------------------------------------------------------------------------------- 


//* P2. Merge sorted Array
const arr1 = [0, 3, 4, 20];
const arr2 = [4, 6, 21];

// Output --> [0, 3, 4, 4, 20, 21];

// Solutions:
function mergedSortedArr(arr1, arr2) {
    const mergedArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // checking item
    if (arr1.length === 0)
        return arr2;
    else if (arr2.length === 0)
        return arr1;

    // sorting items
    while (arr1Item || arr2Item) {
        if (arr1Item < arr2Item) {
            mergedArr.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArr.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return mergedArr;

}


console.log(mergedSortedArr(arr1, arr2));  // [0, 3, 4, 4, 6, 20, 21]
console.log(mergedSortedArr([0, 4], [1, 0, 3, 4]));


//-------------------------------------------------------------------------------------------------------------------  


//* P3. Reverse a String 

function reverseStr(str) {
    let strArray = str.split("");
    // strArray.reverse();
    let reversedStr = strArray.reverse().join("")
    return reversedStr;

}

console.log(reverseStr('JAVASCRIPT'))



//-------------------------------------------------------------------------------------------------------------------  


