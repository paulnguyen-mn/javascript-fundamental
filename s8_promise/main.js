'use strict'

import postApi from './postApi.js';

// SYNC vs ASYNC
// console.log('Hello 1');
// console.log('Hello 2');
// console.log('Hello 3');


const fetchPosts = async () => {
  // throw new Error('Ko muon resolve :)');

  // https://js-post-api.herokuapp.com/api/posts
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_limit=5&_page=2');
  return response.json();
}

const main = async () => {
  // fetchPosts()
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.log('Failed to fetch posts: ', error);
  //   });

  try {
    const data = await fetchPosts();
    console.log(data)
  } catch (error) {
    console.log('Failed to fetch posts: ', error);
  }
}

// main();

postApi.getAll()
  .then(data => console.log(data));

