import { combineReducers } from 'redux';
import { filmListReducer } from './films-list-reducer';
import { filmDetailsReducer } from './films-details-reducer';
import { searchByReducer } from './search-by-reducer';
import { sortByReducer } from './sort-by-reducer';
import { textInputReducer } from './text-input-reducer';

export const allReducers = combineReducers({
  films: filmListReducer,
  filmDetails: filmDetailsReducer,
  textInputValue: textInputReducer,
  searchBy: searchByReducer,
  sortBy: sortByReducer,
});
