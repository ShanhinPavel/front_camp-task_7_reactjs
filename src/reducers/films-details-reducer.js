import { ADD_FILM_WITH_DETAILS } from '../constants';

const initialfilmDetailsReducer = {};

export const filmDetailsReducer = function (state = initialfilmDetailsReducer, action) {
  switch (action.type) {
    case ADD_FILM_WITH_DETAILS:
      return { ...action.filmWithDetails };
  }
  return state;
};
