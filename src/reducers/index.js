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
        return {
            ...state,
            searchString: action.payload,
            comics: state.originalComicsList.filter((comic) => comic.title.indexOf(action.payload) > -1)
          } 
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    allComics: requestComics,
  })
  
  export default rootReducer