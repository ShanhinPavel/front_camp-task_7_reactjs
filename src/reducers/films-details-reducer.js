import {ADD_FILM_WITH_DETAILS} from '../actions'

const initialfilmDetailsReducer = {}

export const filmDetailsReducer = function(state = initialfilmDetailsReducer, action) {
  switch (action.type) {
    case ADD_FILM_WITH_DETAILS:
      return {...state, ...action.filmWithDetails}
  }
  return state;
}