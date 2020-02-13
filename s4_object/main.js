'use strict';

/**
 *
 * Summary
 *
 * - What is object?
 * - Example of an object?
 * - What is JS built-in object?
 * - Loop through all properties of an object
 *
 * - Clone object
 * - ES6 arrow function
 * - Rest operator and spread operator in object and array
 *
 * - Introduction to OOP
 * - Class properties and method
 * - Inheritance
 * - Polymorphism
 * - Some examples: Shape, Rectangle, Circle
 * - Real world examples: BaseApi, PostApi
 *
 */




const number = 5;
const text = 'Hau Nguyen';
const isAGirl = false;


const person = {
  name: 'Hau Nguyen',
  age: 18,
  isAGirl: false,
  hobbies: ['', ''],
  sayHello: function () {
    console.log('My name is Hau Nguyen');
  }
};
console.log(person.name);
console.log(person.age);
console.log(person['isAGirl']);
person.sayHello();
person['sayHello']();


function sayHello() {
  console.log('Hello');
}

const sayHello = function () {
  console.log('Hello');
};
sayHello();


const sayHello = () => {
  console.log('Hello');
};
sayHello();



// - What is object?
// - Example of an object?


// - Value type and reference type?
// Clone object 

// - What is JS built-in object?
// - Loop through all properties of an object


// Math.
// Number.
// Object.
// Array.isArray()
// Date.now()
// String.
// TODO: Research more about these objects
















// - Clone object
// - ES6 arrow function
// - Rest operator and spread operator in object and array
// - Destructoring

const person = {
  name: 'Hau Nguyen',
  age: 18,
  isAGirl: false,
  hobbies: ['', ''],
  sayHello: function () {
    console.log('My name is Hau Nguyen');
  }
};

// const name = person.name;
// const age = person.age;
// const isAGirl = person.isAGirl;

const { name, age, isAGirl } = person;
console.log(name, age, isAGirl);

const a = [1, 2, 3];
// a[0]
// a[1]
// a[2]
const [first, second] = a;
console.log(first, second);





// https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/

// - Introduction to OOP
// - Class properties and method
// - Inheritance
// - Polymorphism
// - Some examples: Shape, Rectangle, Circle
// - Real world examples: BaseApi, PostApi

// OOP = Object Oriented Programming
// Class 
// Object

/**
 *
 * Shape: calculateArea()
 * width
 * height
 *
 * - Rectangle
 * - Square
 * - Circle
 *
 *
 */


const [first, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(rest);




