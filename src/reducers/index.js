import { combineReducers } from 'redux';
import {
    REQUEST_COMICS
  } from '../actions/types';

  const initialState = {
      comics: []
  }
  const requestComics = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_COMICS:
      console.log('reducer REQUEST_COMICS');
        return {
          ...state,
          comics: action.payload
        }
      default:
        return state
    }
  }
  
  const rootReducer = combineReducers({
    allComics: requestComics,
  })
  
  export default rootReducer