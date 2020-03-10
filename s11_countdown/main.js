class GlobalState {
  constructor() {
    this.loggedInUser = {
      value: null,
      handlers: [],
    };

    this.cart = {
      value: null,
      handlers: [],
    };
  }

  subscribe(stateName, handler) {
    if (!this[stateName]) return;

    this[stateName].handlers.push(handler);
  }

  notify(stateName, newValue) {
    if (!this[stateName]) return;

    // set new value
    this[stateName].value = newValue;

    // execute all handlers
    for (const handler of this[stateName].handlers) {
      handler(newValue);
    }
  }
};
const globalState = new GlobalState();

const hello1 = (newValue) => {
  console.log('Hello1: ', newValue);
};
const hello2 = (newValue) => {
  console.log('Hello2: ', newValue);
};

globalState.subscribe('loggedInUser', hello1);
globalState.notify('loggedInUser', 'Po Nguyen');

globalState.subscribe('loggedInUser', hello2);
globalState.notify('loggedInUser', null);



// -------------------


const startCountdown = (seconds) => {
  // if seconds = 0, stop
  if (seconds === -1) {
    console.log('Count down finished!');
    // document.body.style.backgroundColor = 'deeppink';
    return;
  }

  // render seconds to p tag
  const countdownElement = document.querySelector('#countdown');
  if (countdownElement) {
    countdownElement.innerText = seconds;
  }

  // render seconds - 1
  setTimeout(() => {
    startCountdown(seconds - 1);
  }, 1000);
};

// MAIN
const main = () => {
  startCountdown(10);
};
main();
