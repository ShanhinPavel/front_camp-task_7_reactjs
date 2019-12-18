import {
  ADD_FILMS,
  CLEAR_TEXT_INPUT_VALUE,
  GET_TEXT_INPUT_VALUE,
  GET_SEARCH_TYPE,
  GET_SORT_TYPE,
} from '../constants';

export const getFilms = (films) => ({
  type: ADD_FILMS,
  films,
});

// text input field
export const getTextInputValue = (textInputValue) => ({
  type: GET_TEXT_INPUT_VALUE,
  textInputValue,
});

export const clearTextInputValue = () => ({
  type: CLEAR_TEXT_INPUT_VALUE,
  textInputValue: '',
});

// search by tab button
export const getSearchType = (searchType) => ({
  type: GET_SEARCH_TYPE,
  searchType,
});

// sort by tab button
export const getSortType = (sortType) => ({
  type: GET_SORT_TYPE,
  sortType,
});
