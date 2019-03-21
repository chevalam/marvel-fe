import { combineReducers } from 'redux';
import {
  REQUEST_COMICS,
  SEARCH_COMICS
} from '../actions/types';

const initialState = {
  originalComicsList: [],
  comics: [],
  searchString: ''
}
const requestComics = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMICS:
      return {
        ...state,
        comics: action.payload,
        originalComicsList: action.payload
      }
    case SEARCH_COMICS:
      let updatedComics = state.originalComicsList;
      if (action.payload.length > 0) {
        updatedComics = state.originalComicsList.filter((comic) => comic.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1);
      }
      return {
        ...state,
        searchString: action.payload,
        comics: updatedComics
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  allComics: requestComics,
})

export default rootReducer