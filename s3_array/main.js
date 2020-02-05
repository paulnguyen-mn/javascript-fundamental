// Modern JS
'use strict';

/**
 *
 * AGENDA
 *
 * - What is array?
 * - How to create an array?
 * - How to loop through each item in array?
 * - How to add/remove an item?
 * - How to find an item?
 * - What is split and join?
 * - Some cool method?
 *
 */


// What is array?
// How to create an array?
// How many ways to loop through an array?
const numbers = [];
const numbers = [3, 5, 7];
const numberList = [3, 5, 7];
console.log('Position 0', numbers[0]);
console.log('Position 0', numbers[1]);
console.log('Position 0', numbers[2]);

const strings = ['js', 'is', 'cool'];
const mixed = [1, 'javascipt', [2, 4, 6]];


const numbers = [4, 5, 6];
// i++ 
// i = i + 1
for (let i = 0; i < numbers.length; i++) {
  // Do sth with each number
  console.log(numbers[i]);
}


const numbers = [4, 5, 6];
for (const number of numbers) {
  console.log(number);
}

// Print even numbers
const numbers = [4, 5, 6];
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// Sum of array
const numbers = [4, 5, 6];
let total = 0;
for (const number of numbers) {
  // total = total + number;
  total += number;
}
console.log(total);




// LAB: Loop through array and print all items
// LAB: Print all even numbers of an array
// LAB: Sum all odd numbers of an array
// LAB: Find min and max of an array


/**
 *
 * ADD/REMOVE ITEM
 *
 * - Add at the end: push() --> FAST
 * - Add at the beginning: unshift() --> SLOW
 *
 * - Remove the last item: pop() --> FAST
 * - Remove the first item: shift() --> SLOW
 *
 * - Add new item at a middle position: splice()
 * - Remove at a middle position: splice()
 */

// Add new items at the end
const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

// Remove items at the end
const numbers = [1, 2, 3];
const lastNumber = numbers.pop();
console.log(numbers, lastNumber);


// Add new items at the beginning
const numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers);

// Add new items at the beginning
const numbers = [1, 2, 3];
const firstNumber = numbers.shift();
console.log(numbers, firstNumber);


function randomNumberMax(max) {
  const randomNumber = Math.random() * max;
  console.log(Math.trunc(randomNumber));
  return Math.trunc(randomNumber);
}
randomNumberMax(100);


function randomNumber(min, max) {
  const randomNumber = Math.trunc(
    Math.random() * (max - min)
  );
  console.log(randomNumber + min);
  return randomNumber + min;
}
// randomNumber(100, 1000);



function generateNumberList(length) {
  const numberList = [];

  for (let i = 0; i < length; i++) {
    const number = randomNumber(100, 1000);
    numberList.push(number);
  }

  return numberList;
}
console.log(generateNumberList(10));



// LAB: Sum of two arrays. [1, 2, 3] + [2, 4, 6] = [3, 6, 9];
// LAB: Generate an array of random numbers


/**
 *
 * FIND Element
 *
 * - find()
 * - findIndex()
 * - some()
 * - includes()
 */

() => { }

const numbers = [5, 7, 9];
console.log(
  numbers.find(function (number) { return number > 5; })
);
console.log(
  numbers.find((number) => { return number > 5; })
);
console.log(
  numbers.find(number => number > 5)
);


// Includes
const numbers = [4, 5, 6];
console.log(numbers.includes(5));
console.log(numbers.includes(7));









// LAB: Merge two arrays and remove duplication. [1, 2, 3] and [2, 3, 4, 5] = [1, 2, 3, 4, 5]
// LAB: Remove all duplication of an array.

/**
 *
 * SPLIT and JOIN
 *
 */

// ---------------------------
// parameterize
// Write a JavaScript function to parameterize a string. "Code JS Is Fun" --> "code-js-is-fun"

const text = 'code js is fun';
const words = text.split(' ');
console.log(words);
console.log(words.join('\u{1f60d}'));


/**
 *
 * COOL METHODS
 *
 * - filter()
 * - reduce()
 * - sort()
 * - map()
 */


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.filter(number => number % 2 === 0));
console.log(numbers.filter(number => number % 2 === 1));
console.log(numbers.filter(number => number > 4));

// [1, 2, 3] ==> [2, 4, 6]
console.log([1, 2, 3].map(number => number * 2));

console.log(
  [1, 2, 3]
    .map(number => {
      if (number % 2 === 0) {
        return number * 2;
      }

      return number;
    })
);

// Sum of array via reduce()
const sum = [1, 2, 3].reduce(
  (prevResult, currentNumber) => prevResult + currentNumber,
  0
);
console.log(sum);

const number = 5;
const isPositive = number > 0 ? true : false;

const max = [1, 2, 3].reduce(
  (prevResult, currentNumber) => {
    if (currentNumber > prevResult) {
      return currentNumber;
    }

    return prevResult;
  },
  Number.NEGATIVE_INFINITY
);
console.log(max);


const max = [1, 2, 3].reduce(
  (prevResult, currentNumber) =>
    currentNumber > prevResult ? currentNumber : prevResult,
  Number.NEGATIVE_INFINITY
);
console.log(max);






// EXCERCISE

// ------------------- 
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// ------------------- 
// https://leetcode.com/problems/search-insert-position/


// More excercises
// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php
// https://leetcode.com/tag/array/
// https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=arrays




