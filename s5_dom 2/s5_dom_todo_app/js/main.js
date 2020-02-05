

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
  const todoItemTemplate = document.querySelector('#todoItemTemplate');
  if (todoListElement && todoItemTemplate) {
    for (const todo of todoList) {
      const todoItemFragment = todoItemTemplate.content.cloneNode(true);
      console.log(todoItemFragment);

      const todoItemElement = todoItemFragment.querySelector('li');
      console.log(todoItemElement);
      if (todoItemElement) {
        todoItemElement.setAttribute('data-todo-id', todo.id.toString());
      }

      // Find and set title
      const todoTitleElement = todoItemFragment.querySelector('#todoItemTitle');
      if (todoTitleElement) {
        todoTitleElement.innerText = todo.title;

        // Prevent duplicate id
        todoTitleElement.removeAttribute('id');
      }

      todoListElement.appendChild(todoItemFragment);
    }
  }
};

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
