// Modern JS
'use strict';

console.log('Welcome to Javascript!!!');


/**
 *
 * VARIABLES
 *
 * - Use `const` for unchanged variable
 * - Use `let` for changing variable
 * - Don't use the old `var`
 */

var myName = 'Hau Nguyen';
console.log('My name is', myName);

const name = 'Hau Nguyen';
// Want to change name
// This code will get error
name = 'Hau Nguyen A';

let age = 18;
age = 19;


/**
*
* DATA TYPES
*
* - number
* - string
* - boolean
* - object: Math, Number, String, Array, Date, Symbol, ...
* - symbol
* - null vs undefined
*/

const sumA = 100;
const sumB = 100.25;

const nameAgain = 'Hau Nguyen';
const combineName = 'Hau Nguyen' + ' 100';
const combineNameB = `My name is ${nameAgain} ${sumA}`;
console.log(combineNameB);

const isStudent = true;
const hasMoney = false;
const containsHello = true;

// What is function? An example?
// How to write a function

function calculateMyAge(birthYear) {
  // Input: birth year
  // Output: age
  // Validation: input data
  if (birthYear < 0) {
    console.log('You troll me!!! :P');
    return -1;
  }

  const myAge = 2019 - birthYear;
  return myAge;
}

console.log(calculateMyAge(-1));

const myAgeB = calculateMyAge(2000);
console.log('My age is', myAgeB);





// - Lab 1: Cho năm sinh, in ra số tuổi.
// - Lab 2: Cho bán kính hình tròn. 
//   Tính và in ra chu vi, diện tích của hình tròn.
// Input: ban kinh: r
// Output: No output

const PI = 3.14;

function tinhChuViHinhTron(r) {
  if (r < 0) {
    return -1;
  }

  return 2 * Math.PI * r;
}

function tinhDienTinhHinhTron(r) {
  if (r < 0) {
    return -1;
  }

  return Math.PI * (r * r);
}


function printNumber(number) {
  if (number > 0) {
    console.log('Positive');
  }

  console.log('Negative');
}
printNumber(10);

