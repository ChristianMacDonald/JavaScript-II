// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
    cb(arr.length);
}

getLength(items, console.log);

function last(arr, cb) {
    cb(arr[arr.length - 1]);
}

last(items, console.log);

function sumNums(x, y, cb) {
    cb(x + y);
}

sumNums(2, 2, console.log);

function multiplyNums(x, y, cb) {
    cb(x * y);
}

multiplyNums(2, 2, console.log);

function contains(item, list, cb) {
    cb(list.includes(item));
}

contains("yo-yo", items, console.log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
    let duplicateFreeArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!duplicateFreeArray.includes(array[i])) {
            duplicateFreeArray.push(array[i]);
        }
    }
    cb(duplicateFreeArray);
}

removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4], console.log);