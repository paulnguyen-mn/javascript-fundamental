

// Change h1 color to deeppink
// 1. Find h1
// 2. Change element style, color = deeppink
const h1Element = document.querySelector('h1');
// console.log(h1Element);
if (h1Element) {
  h1Element.style.color = 'deeppink';
}

// FEATURE
// Remove todo item on click
// 
// 

const handleTodoItemClick = (e) => {
  console.log('Item clicked', e.target);
  // Find ul#todoList
  // Remove clicked li
  const todoListElement = document.querySelector('#todoList');
  if (todoListElement) {
    todoListElement.removeChild(e.target);
  }
};

// Find all todo item (li) and add click event
const existingTodoItems = document.querySelectorAll('ul#todoList > li');
for (const todoItem of existingTodoItems) {
  todoItem.addEventListener('click', handleTodoItemClick);
}

// Render todoList
const todoList = [
  'Learn Javascript 1',
  'Coding Javascript 2',
  'Learn Javascript 3',
  'Coding Javascript 4',
];

// Find todoList elment
const todoListElement = document.querySelector('#todoList');
if (todoListElement) {
  // Loop through todoList
  // For each item, do:
  // - Create element: li
  // - Set text content
  // - Add to ul
  for (const todo of todoList) {
    const liElement = document.createElement('li');
    liElement.innerText = todo;
    liElement.addEventListener('click', handleTodoItemClick);

    todoListElement.appendChild(liElement);
  }
}

