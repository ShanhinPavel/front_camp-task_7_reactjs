import {combineReducers} from 'redux'
import {filmListReducer} from './films-list-reducer'
import {filmDetailsReducer} from './films-details-reducer'

export const allReducers = combineReducers({
  films: filmListReducer,
  filmDetails: filmDetailsReducer
})