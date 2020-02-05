
const showMessage = () => {
  console.log('My message is here...');
};

const showMyName = () => {
  console.log('My name is Po...');
};

const countDown = (seconds, callback) => {
  if (seconds <= 0) {
    console.log('Đủ rồi nha anh!!! :P');
  }

  for (let i = seconds; i >= 0; i = i - 1) {
    console.log('Count down: ', i);
  }

  if (callback) {
    callback();
  }
};

countDown(10, showMyName);



// ------
// setTimeout(callback, milliseconds)
setTimeout(showMessage, 2000);

const countDown2 = (currentSecond, callback) => {
  if (currentSecond <= 0) {
    console.log('Count down: FINISHED');

    if (callback) callback();
    return;
  }

  console.log('Count down: ', currentSecond);
  // countDown2(currentSecond - 1, callback);
  setTimeout(
    () => countDown2(currentSecond - 1, callback),
    1000
  );
};
countDown2(10);



// -----

console.log('One');

// console.log('Two');
setTimeout(
  () => console.log('Two'),
  0
);

setTimeout(
  () => console.log('Three'),
  0
);

// console.log('Three');
