
// Global scope and block scope
let count = 1;

function multiply(number) {
  return number * 2;
}

count = multiply(count);
// multiply();
console.log(count);

{
  const number = 123;
  console.log(number);
}
console.log(number);
