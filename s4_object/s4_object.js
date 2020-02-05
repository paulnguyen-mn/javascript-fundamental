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
let a = 'abc';
let b = a;
a = 'def';
console.log(b);


// ----------
const a = {
  name: 'Alice',
};
const b = a;
a.name = 'Bob';
console.log(b);


// Clone object
const a = {
  name: 'Alice',
  age: 17,
};
// const b = Object.assign({}, a);
const b = {
  age: 18,
  isAGirl: false,
  ...a,
};
a.name = 'Bob';
console.log(b);

// - What is JS built-in object?
// - Loop through all properties of an object


// Math.
// Number.
// Object.
// Array.isArray()
// Date.now()
// String.
// TODO: Research more about these objects


const sum = (...numbers) =>
  numbers.reduce(
    (prevResult, currentNumber) => prevResult + currentNumber, 0
  );
console.log(sum(1, 2, 3, 4, 5));


const a = [1, 2, 3, 4];
console.log(Math.max(...a));

















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






// - Introduction to OOP
// - Class properties and method
// - Inheritance
// - Polymorphism
// - Some examples: Shape, Rectangle, Circle
// - Real world examples: BaseApi, PostApi

// OOP = Object Oriented Programming
// Class 
// Object

class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHello() {
    console.log(`Name: ${this.name} - Age: ${this.age} - Gender: ${this.gender}`);
  }
}


class GoodStudent extends Student {
  constructor(mark, name, age, isAGirl) {
    super(name, age, isAGirl);
    this.isGood = true;
    this.mark = mark;
  }

  sayHello() {
    console.log('Good hello');
  }

  sayGood() {
    this.sayHello();
    super.sayHello();
    console.log('Good');
  }
}

const goodStudent = new GoodStudent(10, 'Po', 20, 'Male');
const { name, age, gender, mark, isGood } = goodStudent;
console.log(name, age, gender, isGood, mark);
// goodStudent.sayHello();
goodStudent.sayGood();



const student1 = new Student('Hau', 18, 'NA');
console.log(student1.name, student1.age, student1.gender);
student1.sayHello();

const student2 = new Student('Paul', 19, 'NA');
student2.sayHello();






// Student: whoYouAre()
//   - BadStudent: whoYouAre() -> Bad
//   - GoodStudent: whoYouAre() -> Good



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




