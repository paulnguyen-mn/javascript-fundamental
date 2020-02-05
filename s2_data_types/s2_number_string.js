// Modern JS
'use strict';


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



// Integer and float
const itemsCount = 123;
const mark = 7.5;

// Infinite and NaN
console.log('\n--- Infinite and NaN ---');
console.log('Positive Infinite: ', 1 / 0, Number.POSITIVE_INFINITY);
console.log('Negative Infinite: ', -1 / 0, Number.NEGATIVE_INFINITY);
console.log('NaN: ', 1 - 'abc', Number.parseInt('e12'));

// Write number with many zeroes
console.log('\n--- Number with many zeroes ---');
console.log('Number: ', 1000000);
console.log('Number with zeroes: ', 1e6);


// Operators
console.log('\n--- Operators ---');
const a = 17;
const b = 5;
console.log('Addition: ', a + b);
console.log('Substraction: ', a - b);
console.log('Multiplication: ', a * b);
console.log('Division: ', a / b);
console.log('Division and remove floating part: ', Math.trunc(a / b));
console.log('Remainder: ', a % b);
console.log('Combination: ', (a + b) * 5);

// Imprecise calculation
// console.log('\n--- Imprecise calculation ---');
console.log('0.1 + 0.2 = ', 0.1 + 0.2, (0.1 + 0.2).toFixed(1));

console.log(
  'Compare 0.3 vs 0.1 + 0.2: '
  , 0.3 === 0.1 + 0.2
  , 0.3.toFixed(1) === (0.1 + 0.2).toFixed(1)
);


// toString()
const count = 123;
console.log(
  'Number to string: ',
  count.toString(),
  count.toString(16),
  count.toString(2)
);

// parseInt() and parseFloat()
console.log(
  'Parse string to integer',
  Number.parseInt('100') + 23,
  '100' + 23, 23 + '100',
  '123' - 0
);
console.log(
  'Parse string to float',
  Number.parseFloat('100.25') + 23,
  '100.25' + 23
);

// Viết hàm làm tròn số đầu vào tới số thập phân thứ 3
// Viết hàm random một số bất kỳ có 4 chữ số.
// Cho 3 số nguyên, xuất ra min, max.
// Nhập vào số nguyên có 3 chữ số. Tính tổng các chữ số.


// number has 3 digits
function sumOfDigits(number) {
  const donVi = number % 10;
  const chuc = Math.trunc(number / 10) % 10;
  const tram = Math.trunc(number / 100);

  return tram + chuc + donVi;
}
console.log(sumOfDigits(123));
console.log(sumOfDigits(246));



/**
 *
 * STRING
 *
 * - Single or double quoted
 * - Using backticks for formating string, span multiple lines
 * - Escape ' " back slash
 * - String length
 * - Strings are immutable
 * - Access to characters, loop through all characters in a string: `for...of`
 * - Changing case: `toLowerCase()`, `toUpperCase()`
 * - Searching a substring: `indexOf()`, `lastIndexOf()`
 * - Check if contains a substring: `includes`, `startsWith`, `endsWith`
 * - Get a substring: `slice`, `substring`
 * - String comparison
 * - Split string into chunks by delimeter
 */

const name = "Hau";
const name = 'I\'m Hau \u{1f60d} \u{1f43b}'; // recommend

const formatName = `My name is ${name} ${1 + 2}`;
console.log(formatName, formatName.length);

// immutable
let hello = 'Rich';
// hello[0] = 'h';
hello = 'rich'
console.log(hello);

for (const letter of hello) {
  console.log(letter);
}

console.log(hello.toUpperCase());
console.log(hello.toLowerCase());


const str = 'Hello World Javascript';
console.log('Has World: ', str.includes('World'));
console.log('Has world: ', str.includes('world'));
console.log('Has world: ', str.toLowerCase().includes('wOrld'.toLowerCase()));


const name = "Pooooo";
console.log(name.indexOf('o'));
console.log(name.lastIndexOf('o'));

console.log(name.substring(0));
console.log(name.slice(0, 2));


const hello = '   Hello   World    World';
console.log(hello.split(' '));

// text is spam if includes spam or hack
function checkSpam(text) {
  let isSpam = false;

  // text is spam if includes spam or hack
  const includeSpam = text.includes('spam');
  const includeHack = text.includes('hack');
  if (includeSpam || includeHack) {
    isSpam = true;
  }

  return isSpam;
}
console.log(checkSpam('Khong co hack   dau nha!!! :P'));


// ---------------------------
// checkSpam
// Write a function checkSpam(text) that returns true if text contains ‘spam’ or ‘hack’, otherwise `false.

// ---------------------------
// truncate
// Create a function truncate(text, maxlength) that checks the length of the text and, 
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
// to make its length equal to maxlength.

// ---------------------------
// capitalizeFirstLetter
// Write a function capitalizeFirstLetter(str) that returns the string str with the uppercased first character

// ---------------------------
// parameterize
// Write a JavaScript function to parameterize a string. "Code JS Is Fun" --> "code-js-is-fun"


/**
 *
 * COMPARISON
 *
 * - Exactly equal instead of equal: `===` instead of `==`
 * - Absolutely not equal instead of not equal: `!==` instead of `!=`
 * - Operator: >=, <=, <, >
 */

if (123 == '123') {
  console.log('Oh troi! Bang luon kia! :P');
}

if (123 === '123') {
  console.log('Hay ah nha, bang roi do');
}

if (123 !== '123') {
  console.log('Co in ra nha');
}


function xepLoaiHocSinh(diem) {
  if (diem < 0 || diem > 10) {
    console.log('Diem ko hop le!!! :P');
    return;
  }

  if (diem <= 5) {
    console.log('Trung Binh');
  } else if (diem <= 8) {
    console.log('Kha');
  } else {
    console.log('Gioi');
  }
}
xepLoaiHocSinh(1);
xepLoaiHocSinh(7);
xepLoaiHocSinh(10);
xepLoaiHocSinh(15);


function printMonth(month) {
  switch (month) {
    case 1: console.log('Jan'); break;
    case 2: console.log('Feb'); break;
    case 3: console.log('Mar'); break;
    case 4: console.log('Apr'); break;
    case 5: console.log('May'); break;
    default: console.log('Thang ko hop le! :P');
  }
}
printMonth(1);
printMonth(3);
printMonth(7);


// - if...
// - if...else
// - if...else if...else
// classifyStudent()


// Switch
// - switch...case
// Write a function to print our the month in text. Exp: printMonth(1) --> January, February



// ```
// Cho số tiền. Tính xem cần dùng bao nhiêu tờ 10đ, 5đ, 2đ, 1đ. Ví dụ: 128đ = 12 * 10đ + 1 * 5đ + 1 * 2đ + 1 * 1đ.
// ```


// ```
// Tính tiền taxi biết: 
//   1km đầu giá 15000
//   2 -> 5km giá 13500
//   6 trở lên giá 11000
// Nếu hơn 120km thì đc giảm 10%
// ```


function checkWhoIAm(power) {
  if (power < 0) {
    console.log('You\'re nothing! ~.~');
  } else if (power < 100) {
    console.log('Wow ... little hero :P');
  } else {
    console.log('Super hero');
  }
}

checkWhoIAm(100);





