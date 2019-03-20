import {
  REQUEST_COMICS,
  SEARCH_COMICS
} from './types';

export const requestComics = () => dispatch => {
  console.log('fetching in requestComics');

  fetch('http://localhost:3000/cover')
    .then(res => res.json())
    .then(data => dispatch({
      type: REQUEST_COMICS,
      payload: data.posts
    }));
}

export const searchComics = (searchString) => dispatch => {
  console.log('searching in Comics');
  dispatch({
    type: SEARCH_COMICS,
    payload: searchString
  });
}