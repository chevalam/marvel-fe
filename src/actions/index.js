import {
    REQUEST_COMICS
  } from './types';

  export const requestComics = () => dispatch => {
    console.log('fetching in requestComics');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({ 
        type: REQUEST_COMICS,
        payload: data 
    }));       
  }