import {
    REQUEST_COMICS,
    SEARCH_COMICS
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

  export const searchComics = (searchString) => dispatch => {
    console.log('searching in Comics');
    dispatch({ 
        type: SEARCH_COMICS,
        payload: searchString 
    });       
  }