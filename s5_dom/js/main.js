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
