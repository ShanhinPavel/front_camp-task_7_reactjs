import {
  ADD_FILMS, GET_SEARCH_TYPE, GET_TEXT_INPUT_VALUE, GET_SORT_TYPE,
} from '../constants';

const initialfilmListReducer = [];

export const filmListReducer = function (state = initialfilmListReducer, action) {
  switch (action.type) {
    case ADD_FILMS:
      return [...action.films];
  }
  return state;
};
