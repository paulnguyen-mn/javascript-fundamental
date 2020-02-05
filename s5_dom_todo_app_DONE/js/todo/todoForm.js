// Manage todo form
class TodoForm {
  constructor(todoFormId, onTodoAdd, onTodoUpdate) {
    this.todoForm = document.getElementById(todoFormId);
    this.onTodoAdd = onTodoAdd;
    this.onTodoUpdate = onTodoUpdate;

    if (this.todoForm) {
      this.todoForm.addEventListener('submit', this.handleFormSubmit);
    }
  }

  handleFormSubmit(e) {
    console.log('Form submit');
    e.preventDefault();
  }

  reset() {
    if (this.todoForm) {
      // Reset todo title field
      const todoTitleInput = this.todoForm.querySelector('p.todo-item-title');
      if (todoTitleInput) {
        todoTitleInput.value = '';
      }

      // Remove data-todo-id attribute from form
      this.todoForm.removeAttribute('data-todo-id');

      // Reset button text
      const submitButton = this.todoForm.querySelector('button[type=submit]');
      if (submitButton) {
        submitButton.innerText = 'Add to list';
        submitButton.classList.remove('btn-success');
        submitButton.classList.add('btn-primary');
      }
    }
  }

  set(todo) {
    if (this.todoForm) {
      // Set title
      const todoTitleInput = this.todoForm.querySelector('p.todo-item-title');
      if (todoTitleInput) {
        todoTitleInput.value = todo.title;
      }

      // Add data-todo-id attribute to form
      this.todoForm.setAttribute('data-todo-id', todo.id);

      // Change button title to save
      const submitButton = this.todoForm.querySelector('button[type=submit]');
      if (submitButton) {
        submitButton.innerText = 'Update todo';
        submitButton.classList.remove('btn-primary');
        submitButton.classList.add('btn-success');
      }
    }
  }
}

const todoForm = new TodoForm('todoForm');
export default todoForm;
