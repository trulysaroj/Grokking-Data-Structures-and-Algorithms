
/* Array --->  a container which can hold a fix number of items and these items should be of the same type.
Most of the data structures make use of arrays to implement their algorithms.

Important terms to understand the concept of Array.
  Element −> Each item stored in an array is called an element.
  Index −> Each location of an element in an array has a numerical index, which is used to identify the element.
*/ 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operations & Properties
const arr = [1, 2, 3, 4,];

/* If we were on 32 bit system, item in array will take 4 shelves of memory
i.e. 1 shelf = 8 bit = 1 Byte | 4 shelves = 32 bit = 4 byte
4item x 4shelves = 16 bytes of storage  */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// push --> add item to end of array
arr.push(5);  // O(1)
console.log(arr);    // [1, 2, 3, 4, 5]



// pop --> remove item from end of array
arr.pop(); // O(1)
console.log(arr);  // [1, 2, 3, 4]


// unshift --> add item to the beginning of array
arr.unshift(0); // O(n)
console.log(arr);  // [0, 1, 2, 3, 4 ]



// shift --> Remove item from beginning of array
arr.shift();  // O(n)
console.log(arr);   // [1, 2, 3, 4]



// splice --> Add item on speicific index
arr.splice(2, 0, 'LEO');  // O(n)
// Start from index to | remove 0 elements | add LEO
console.log(arr);  // [1, 2, 'LEO', 3, 4]



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//* Dynamic vs Static Array


/* Static (Fixed-Size) Arrays:
   --> arrays have a fixed size, you need to specify the number of elements they can hold when you create them.
   --> Once a static array is created, its size cannot be changed. we cannot add or remove elements beyond the initial size.
   --> Static arrays are often created using the Array constructor with a specific length:
   --> use when if you know the exact size of the array in advance and want to optimize memory usage,  */ 

// eg. 
const staticArr = new Array(7);
console.log(staticArr.length);  //7


/* BigO of Static Array
   lookup  --> O(1)
   push   --> O(1)
   insert --> O(n)
   delete --> O(n)



------------------------------------------------------------------------------------------------------------------- 


Dynamic (Resizable) Arrays:
   --> can grow or shrink in size dynamically as needed. 
   --> JavaScript arrays are dynamic by default.
   --> more flexible but may use more memory 

*/ 

// eg. as usual array
const dynamicArr = [];
dynamicArr.push(1);
dynamicArr.push(2, 3, 'Four');

console.log(dynamicArr);  // [1, 2, 3, 'Four']



/* BigO of dynamic Array
   lookup  --> O(1)
   append   --> O(1) or O(n)
   insert --> O(n)
   delete --> O(n)  
*/


/*------------------------------------------------------------------------------------------------------------------- 

 Pros & cons of Array:

 Used for:
  --> Fast Lookups
  --> Fast push/pop
  --> Ordered list

 cons of Array:
  --> Slow insert 
  --> Slow delete
  --> Fixed size (In case of static arr)     */ 




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





