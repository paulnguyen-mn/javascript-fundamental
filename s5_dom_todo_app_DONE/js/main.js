import * as myTodoForm from './todo/todoForm.js';

const randomNumber = (a, b) => {
  const random = Math.trunc(Math.random() * (b - a));
  return a + random;
};


const handleTodoItemEditClick = (e, todo) => {
  setTodoForm(todo);
};

const handleTodoItemRemoveClick = (e, todoItemElement) => {
  console.log('remove ', todoItemElement);
  const todoListElement = document.querySelector('#todoList');
  const confirmMessage = `Are you sure to remove todo "${todoItemElement.innerText.trim()}"`;
  if (todoListElement && window.confirm(confirmMessage)) {
    todoListElement.removeChild(todoItemElement);
  }
};

const buildTodoItem = (todo) => {
  // Get todo item template
  const todoItemTemplate = document.querySelector('#todoItemTemplate');

  if (todoItemTemplate) {
    // Clone template content and update values
    const todoItemFragment = todoItemTemplate.content.cloneNode(true);

    // Set a random id
    const todoItem = todoItemFragment.querySelector('li');
    if (todoItem) {
      todoItem.setAttribute('data-todo-id', todo.id);
    }

    // Update title
    const titleElement = todoItemFragment.querySelector('#todoItemTitle');
    if (titleElement) {
      titleElement.innerText = todo.title;
      titleElement.removeAttribute('id');
    }

    // Bind event listener for edit and remove button
    const todoEditButton = todoItem.querySelector('#todoItemEdit');
    if (todoEditButton) {
      todoEditButton.addEventListener('click', (e) => handleTodoItemEditClick(e, todo, todoItem));
      todoEditButton.removeAttribute('id');
    }

    const todoRemoveButton = todoItem.querySelector('#todoItemRemove');
    if (todoRemoveButton) {
      todoRemoveButton.addEventListener('click', (e) => handleTodoItemRemoveClick(e, todoItem));
      todoRemoveButton.removeAttribute('id');
    }

    return todoItem;
  }
};

const addNewTodoItem = (todoTitle) => {
  // Get todo list element
  const todoList = document.querySelector('#todoList');
  if (todoList) {
    // Build todo item element
    const todoItem = buildTodoItem(todoTitle);

    // Add the created item to list
    todoList.appendChild(todoItem);
  }
};

const resetTodoForm = () => {
  // TODO: Try to reset todo form
  const todoFormElement = document.querySelector('#todoForm');
  if (todoFormElement) {
    // Reset todo title field
    const todoTitleInput = todoFormElement.querySelector('#todoTitle');
    if (todoTitleInput) {
      todoTitleInput.value = '';
    }

    // Remove data-todo-id attribute from form
    todoFormElement.removeAttribute('data-todo-id');

    // Reset button text
    const submitButton = todoFormElement.querySelector('button[type=submit]');
    if (submitButton) {
      submitButton.innerText = 'Add to list';
      submitButton.classList.remove('btn-success');
      submitButton.classList.add('btn-primary');
    }
  }
};

const setTodoForm = (todo) => {
  const todoFormElement = document.querySelector('#todoForm');
  if (todoFormElement) {
    // Set title
    const todoTitleInput = todoFormElement.querySelector('#todoTitle');
    if (todoTitleInput) {
      todoTitleInput.value = todo.title;
    }

    // Add data-todo-id attribute to form
    todoFormElement.setAttribute('data-todo-id', todo.id);

    // Change button title to save
    const submitButton = todoFormElement.querySelector('button[type=submit]');
    if (submitButton) {
      submitButton.innerText = 'Update todo';
      submitButton.classList.remove('btn-primary');
      submitButton.classList.add('btn-success');
    }
  }
};

const handleTodoFormSubmit = (e) => {
  try {
    // Validate todo item title
    const todoTitleInput = todoForm.querySelector('#todoTitle');
    const todoTitle = todoTitleInput.value;
    if (!todoTitle || !todoTitle.trim()) {
      alert('Please enter a todo title');
      e.preventDefault();
      return;
    }

    // Determine whether add or edit mode based on availability of data-todo-id on form
    const todoFormElement = document.querySelector('#todoForm');
    const todoItemId = todoFormElement.getAttribute('data-todo-id');
    const mode = todoItemId ? 'edit' : 'add';

    if (mode === 'add') {
      // Add new todo item
      addNewTodoItem({
        id: randomNumber(10000, 100000),
        title: todoTitle,
      });
    } else {
      const selector = `ul#todoList > li[data-todo-id="${todoItemId}"]`;
      const todoItemElement = document.querySelector(selector);
      if (todoItemElement) {
        const todoTitleElement = todoItemElement.querySelector('p.todo-item-title');
        if (todoTitleElement) {
          todoTitleElement.innerText = todoTitle;
        }
      }
    }

    // Reset form when adding successfully
    resetTodoForm();

    // Prevent reload browser
    e.preventDefault();
  } catch (error) {
    console.log('Failed to submit todo form: ', error);
  }
};

// Handle Add TODO Form submit
// const todoForm = document.querySelector('#todoForm');
// if (todoForm) {
//   todoForm.addEventListener('submit', handleTodoFormSubmit);
// }


const renderTodoList = (todoList) => {
  const todoListElement = document.querySelector('#todoList');
  if (todoListElement) {
    for (const todo of todoList) {
      const todoItemElement = buildTodoItem(todo);
      todoListElement.appendChild(todoItemElement);
    }
  }
};

// ----------------------------
const todoList = [
  {
    id: 1,
    title: 'Learn javascript',
  },
  {
    id: 2,
    title: 'Code js',
  },
  {
    id: 3,
    title: 'Know js',
  },
];
renderTodoList(todoList);
