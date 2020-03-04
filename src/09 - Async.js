
// Promise:
//  - unresolved : wait for something to finish .. 
//  - resolved: something finished and it's OK (then) ..
//  - rejected: something finished and it's BAD (catch) ..

const myPromise = new Promise((resolve, reject) => {
  // reject();
  setTimeout(() => {
    resolve();
  }, 3000);

});

// myPromise
//   .then(() => console.log('Promise Success ..'))
//   .catch(() => console.log('Promise Failed ..'));


// Ajax call with Axios .. 
const axios = require('axios');

const REST_API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

// Promise Way
  // axios.get(REST_API_URL)
  //   .then(response => response)
  //   .then(data => console.log(data))
  //   .catch(err => console.log('Something Failed'));

// Async/Await 

  // (async () => {
  //   try {
  //     const data = await axios.get(REST_API_URL);
  //     console.log(data);
  //   } catch (error) {
  //     console.log('Something Failed')
  //   }
  // })();
