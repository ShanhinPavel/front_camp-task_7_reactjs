import { ADD_FILM_WITH_DETAILS } from '../constants';

export const getFilmDetails = (filmWithDetails) => ({
  type: ADD_FILM_WITH_DETAILS,
  filmWithDetails,
});
