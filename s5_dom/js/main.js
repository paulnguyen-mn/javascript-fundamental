console.log('Hello from main.js');

const titleElement = document.querySelector('#title');
if (titleElement) {
  titleElement.addEventListener('click', handleTitleClick);
}

function handleTitleClick(e) {
  e.target.style.color = 'deeppink';
}

function changeTitleColor() {
  // Find title element
  const titleElement = document.querySelector('#title');
  if (titleElement) {
    // Change color
    titleElement.style.color = 'deeppink';
    titleElement.classList.add('my-title');
  }
}
// changeTitleColor();

// ----------------------
// TODO: Please refactor this function
function renderTodoList(todoList) {
  if (!Array.isArray(todoList)) return;

  // Find ul element
  const todoListElement = document.querySelector('#todoList');
  if (!todoListElement) return;

  // Loop through todoList array
  // For each item
  //  - Create li element
  //  - Set innerText
  //  - Append to ul
  for (const todo of todoList) {
    const liElement = document.createElement('li');
    liElement.innerText = todo;
    todoListElement.appendChild(liElement);

    liElement.addEventListener('click', (e) => {
      e.target.remove();
    });
  }
}

const todoList = [
  'Learn JS is fun',
  'Fun to learn JS',
  'Really!??'
];
renderTodoList(todoList);

// *********************
const studentList = [
  {
    id: 1058,
    firstName: "Winifred",
    lastName: "Carter",
  },
  {
    id: 2775,
    firstName: "Glenn",
    lastName: "Larson",
  },
  {
    id: 3072,
    firstName: "Marcy",
    lastName: "Bowman",
  },
];
renderStudentList(studentList);


function renderStudentList(studentList) {
  if (!Array.isArray(studentList)) return;

  // Find ul element
  const studentListElement = document.querySelector('#studentList');
  if (!studentListElement) return;

  // Loop through studentList array
  // For each item
  //  - Create li element
  //  - Set innerText
  //  - Append to ul
  for (const student of studentList) {
    const liElement = document.createElement('li');
    const studentInfoString = `${student.id} - ${student.firstName} ${student.lastName}`;
    liElement.innerText = studentInfoString;
    studentListElement.appendChild(liElement);

    liElement.addEventListener('click', (e) => {
      e.target.remove();
    });
  }
}
