// --------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!

// ---------- OVERVIEW AND INSTRUCTIONS ----------
// Algorithms
// This is the coding assigment for the sixth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - What is an algortihm?
//  - Properties of a good algorithm
//  - Ideas on how to solve a problem using an algorithm
//  - Practice a few algorithms in JavaScript

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. You can output the return value of a function in a similar way to how you output variable values last week.  To use a function in a console.log you invoke/call the function as part of the console log like this:

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".

// NOTE: These problems (aka algortihm questions) have not necessarily been covered in depth in the lessons so far, so please use your resources (mentors, classmates, etc) to help you. You can also use Google to help you.  There will not be example logs or example output for these questions.

// FOR ADDITIONAL PRACTICE WE RECOMMEND THE FOLLOWING IN ADDITION TO THIS ASSIGNMENT:
// 1. Navigate to freecodecamp.org and create a free account
// 2. In the Menu, select Curriculum and select JavaScript Algorithms and Data Structures Certifications
// 3. Scroll down to the Basic Algorithms Scripting section
// 4. Work on the first 4 (four) problems.
//     a. Convert Celsius to Fahrenheit
//     b. Reverse a String
//     c. Factorialzie a Number
//     d. Find the Longest Word in a String

//---------- QUESTION 1 ----------
// Pairs Maker

// Write a function called pairsMaker(arr) that takes in an array as an argument. 
//The function should return a 2-Dimensional array (an array of arrays) 
//where the subarrays represent unique pairs of elements from the input array.

// PUT YOUR CODE HERE

function pairsMaker(arr) {
  let pairsArray = [];

  for(let i=0; i < arr.length; i++) {
    for(let j=i +1; j < arr.length; j++) {
      pairsArray.push([arr[i], arr[j]]);
    }
  }
  return pairsArray;
}
let arr = ["shoes", "coat", "jeans"];
console.log(pairsMaker(arr));

let arr2 = ["Nayeli","Oscar","Mayra","Glenda","Damian"];
console.log(pairsMaker(arr2));
//---------- QUESTION 2 ----------
// Two Sum

// Write a function called twoSum(arr, target) that accepts an array and a target number as arguments. 
//The function should return a boolean indicating if two distinct numbers of the array add up to the target value.
// You can assume that input array contains only unique numbers.

// PUT YOUR CODE HERE

function twoSum(arr, target) {
    let numSet = new Set();

    for (let num of arr) {
        let difference = target - num;

        if (numSet.has(difference)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}


let arr3 = [3, 2, 5, 6, 7];
let target = 5;
console.log(twoSum(arr, target));
//---------- QUESTION 3 ----------
// Pair Product

// Write a function called pairProduct(arr, product) that accepts an array of numbers 
//and a product (the result when two numbers were multiplied together) as arguments. 
//The function should return a boolean indicating whether or not a pair of distinct elements
// in the array result in the product when multiplied together. 
//You may assume that the input array contains unique elements.

// PUT YOUR CODE HERE
function pairProduct(arr, product) {
    let numSet = new Set();

    for (let num of arr) {
        let requiredNum = product / num; 

        if (numSet.has(requiredNum)) {
            return true; 
        }
        numSet.add(num);
    }
    return false; 
}
let arr4 = [3,4,5,6];
let product = 20;
console.log(pairProduct(arr));

//---------- QUESTION 4 ----------
// Strange Sums

// Write a function called strangeSums(arr) that accepts an array of numbers as an argument. 
//The method should return a count of the number of distinct pairs of elements that have a sum of zero. 
//You may assume that the input array contains unique elements.

// PUT YOUR CODE HERE
function strangeSums(arr) {
    let count = 0;
    let numSet = new Set(arr);

    for (let num of arr) {
       
        if (numSet.has(-num)) {
            count++;
        }
    }

    
    return count / 2;
}


let arr5 = [1, 2, -1, -2, 3];
console.log(strangeSums(arr));