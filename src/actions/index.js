import { REQUEST_COMICS, SEARCH_COMICS, SORT_COMICS } from "./types";

export const requestComics = () => dispatch => {
  fetch("http://localhost:3000/cover")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: REQUEST_COMICS,
        payload: data.posts
      })
    );
};

export const searchComics = searchString => dispatch => {
  dispatch({
    type: SEARCH_COMICS,
    payload: searchString
  });
};

export const sortComics = () => dispatch => {
  dispatch({
    type: SORT_COMICS
  });
};
