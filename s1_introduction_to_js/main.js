'use strict';
// Modern JS

console.log('Tui mới học JS nè hehe!', 'Nữa nè');




/**
 *
 * VARIABLES
 *
 * - Use `const` for unchanged variable
 * - Use `let` for changing variable
 * - Don't use the old `var`
 */

const name = 'Hau Nguyen';
// name = 'Nguyen Hau';
console.log('My name is:', name);

let age = 18;
age = 'test';
console.log('My age is:', age);

const template = `My age is: ${age}`;
const template1 = 'My age is: ' + age;
console.log(template);



const student = {
  name: 'Hau',
  age: 18,
};
console.log('Name: ', student.name);

const studentB = student;
studentB.name = 'Hien';
console.log('Name: ', student.name);

// clone student object
const studentC = {
  ...student,
};
studentC.name = 'Tri';
console.log('Name 3: ', student.name);


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
// console.log(combineNameB);

const isStudent = true;
const hasMoney = false;
const containsHello = true;

// What is function? An example?
// How to write a function
// Calculate my age


function calculateAge(year) {
  // Validate year, should be a positive number
  if (year <= 0) {
    console.log('Troll me :P');
    return -1;
  }

  const age = 2020 - year;
  return age;
}

const myAge = calculateAge(-100);
console.log('My age: ', myAge);







// - Lab 1: Cho năm sinh, in ra số tuổi.
// - Lab 2: Cho bán kính hình tròn. 
//   Tính và in ra chu vi, diện tích của hình tròn.
// Input: ban kinh: r
// Output: No output





/**
 *
 * Conditional statement
 * if {}
 * if {} else {}
 * if {} else if {} else
 *
 *
 */













/**
 *
 * NUMBERS
 *
 * - Two types of numbers: `integer` and `float`
 * - `Infinite` and `NaN`
 * - How to write a number with many zeroes
 * - Operators
 * - Imprecise calculation: toFixed()
 * - Convert number to string: toString()
 * - Parse a string to number: parseInt(), parstFloat()
 * - Math library
 *    - Rouding: Math.round(), Math.floor(), Math.ceil(), Math.trunc()
 *    - Min, max: Math.min(), Math.max()
 *    - Random: Math.random()
 */


 // - Lab 3: Cho số tiền. Tính xem cần dùng bao nhiêu tờ 10đ, 5đ, 2đ, 1đ. Ví dụ: 128đ = 12 * 10đ + 1 * 5đ + 1 * 2đ + 1 * 1đ.
