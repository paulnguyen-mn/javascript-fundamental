// ----------------
// TODO FORM
// ----------------
const getTodoFormValues = () => {
  const todoForm = document.querySelector('#todoForm');
  const formValue = {};
  const formControlNameList = ['title'];

  for (const controlName of formControlNameList) {
    const controlElement = todoForm.querySelector(`[name=${controlName}]`);
    const controlValue = controlElement ? controlElement.value : null;

    formValue[controlName] = controlValue;
  }

  return formValue;
};

const handleTodoFormSubmit = (e) => {
  // Get form values
  const formValue = getTodoFormValues();
  console.log('Form submit', formValue);
  e.preventDefault();
};


// ----------------
// TODO LIST
// ----------------
const getTodoListElement = () => document.querySelector('ul#todoList');
const handleRemoveTodoClick = (e, todoItemElement) => {
  const todoListElement = getTodoListElement();
  if (todoListElement && todoItemElement) {
    if (window.confirm('You\'re going to remove a todo. Thiet hk?')) {
      todoListElement.removeChild(todoItemElement);
    }
  }
};

const buildTodoItem = (todo) => {
  const todoItemTemplate = document.querySelector('#todoItemTemplate');
  const todoItemFragment = todoItemTemplate.content.cloneNode(true);

  const todoItemElement = todoItemFragment.querySelector('li');
  if (todoItemElement) {
    todoItemElement.setAttribute('data-todo-id', todo.id.toString());
  }

  // Find and set title
  const todoTitleElement = todoItemElement.querySelector('#todoItemTitle');
  if (todoTitleElement) {
    todoTitleElement.innerText = todo.title;

    // Prevent duplicate id
    todoTitleElement.removeAttribute('id');
  }

  // Find and bind event for remove button
  const removeButton = todoItemElement.querySelector('#todoItemRemove');
  if (removeButton) {
    removeButton.addEventListener('click', (e) => handleRemoveTodoClick(e, todoItemElement));
  }

  return todoItemElement;
};

const renderTodoList = (todoList) => {
  // Find parent: ul#todoList
  // Find todo item template
  // Loop todoList
  // For each todo item:
  // - Clone template to new element
  // - Set title
  // - Bind events: Edit, Remove
  // - Append li to ul
  const todoListElement = document.querySelector('ul#todoList');
  if (todoListElement && todoItemTemplate) {
    for (const todo of todoList) {
      const todoItemElement = buildTodoItem(todo);
      todoListElement.appendChild(todoItemElement);
    }
  }
};

// ----------------
// MAIN LOGIC
// ----------------
const todoList = [
  {
    id: 1,
    title: 'Learn JS NEW',
  },
  {
    id: 2,
    title: 'Code JS NEW',
  }
];
renderTodoList(todoList);

// Handle todo form submit
const todoForm = document.querySelector('#todoForm');
todoForm.addEventListener('submit', handleTodoFormSubmit);
