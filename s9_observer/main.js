
class GlobalState {
  constructor() {
    this.state = {
      loggedInUser: {
        value: '',
        callbacks: [],
      },
      cart: {
        value: {},
        callbacks: [],
      },
    };
  }

  subscribe(name, callback) {
    if (this.state[name] && callback) {
      this.state[name].callbacks.push(callback);
    }
  }

  emit(name, value) {
    const currentState = this.state[name];
    if (!currentState) return;

    // Update current value
    currentState.value = value;

    // Notify all subscribers
    for (const callback of currentState.callbacks) {
      callback(value);
    }
  }
}


const handleTextChange = (value) => {
  const textElement = document.querySelector('#text');
  if (textElement) {
    const text = value ? 'Avatar nè! :P' : 'Đây là link login nha!';
    textElement.textContent = text;
    // if (value) {
    //   // LOGGED IN
    // } else {
    //   // LOGGED OUT
    // }
  }
};

const handleTitleChange = (value) => {
  const titleElement = document.querySelector('#title');
  if (titleElement) {
    const text = value ? `Welcome ${value}` : 'Đăng nhập để thấy welcome! :P';
    titleElement.textContent = text;
    // if (value) {
    //   // LOGGED IN
    // } else {
    //   // LOGGED OUT
    // }
  }
};

const globalState = new GlobalState();
globalState.subscribe('loggedInUser', handleTextChange);
globalState.subscribe('loggedInUser', handleTitleChange);

const loginButton = document.querySelector('#loginButton');
if (loginButton) {
  loginButton.addEventListener('click', () => {
    globalState.emit('loggedInUser', 'Po Nguyen');
  });
}

const logoutButton = document.querySelector('#logoutButton');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    globalState.emit('loggedInUser', '');
  });
}
