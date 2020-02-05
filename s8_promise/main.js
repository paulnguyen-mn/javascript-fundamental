'use strict'

const getData = () => {
  return new Promise((resolve, reject) => {
    // resolve();
    // reject();

    // setTimeout(
    //   () => resolve([1, 2, 3]),
    //   2000
    // );

    reject(new Error('Không thích resolve! =))'));
  });
};

getData()
  .then(data => console.log(data))
  .catch(error => console.log('Failed to get data: ', error));

