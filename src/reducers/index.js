import { combineReducers } from "redux";
import { REQUEST_COMICS, SEARCH_COMICS, SORT_COMICS } from "../actions/types";
import orderBy from "lodash/orderBy";

const initialState = {
  originalComicsList: [],
  comics: [],
  searchString: "",
  ascendingSort: true
};
const requestComics = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMICS:
      return {
        ...state,
        comics: action.payload,
        originalComicsList: action.payload
      };
    case SEARCH_COMICS:
      let updatedComics = state.originalComicsList;
      if (action.payload.length > 0) {
        updatedComics = state.originalComicsList.filter(
          comic => comic.title.indexOf(action.payload) > -1
        );
      }
      return {
        ...state,
        searchString: action.payload,
        comics: updatedComics
      };
    case SORT_COMICS:
      let sortedComics = orderBy(
        state.comics,
        "title",
        state.ascendingSort ? "asc" : "desc"
      );

      return {
        ...state,
        comics: sortedComics,
        ascendingSort: !state.ascendingSort
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  allComics: requestComics
});

export default rootReducer;
