
const todoList = [
  'Learn Javascript',
  'Code Javascript',
];

const handleTodoItemClick = (e) => {
  console.log('Item click: ', e.target, e.target.innerText);
  const todoListElement = document.querySelector('#todoList');
  if (todoListElement) {
    todoListElement.removeChild(e.target);
  }
};

// Find todoList element and render its items
// const todoListElement = document.getElementById('todoList');
const todoListElement = document.querySelector('#todoList');
console.log(todoListElement);
if (todoListElement) {
  // Loop through todoList and add to list element
  for (const todo of todoList) {
    // Create li element with todo text
    const liElement = document.createElement('li');
    liElement.innerText = todo;
    liElement.addEventListener('click', handleTodoItemClick);

    // Add li to list element
    todoListElement.appendChild(liElement);
  }
}



