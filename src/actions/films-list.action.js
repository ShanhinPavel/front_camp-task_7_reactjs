export const ADD_FILMS = 'ADD FILMS';

export const filmsListAction = () => {
  return {
    type: ADD_FILMS,
    films: [{id: 45566}, {id: 4664646}]
  }
}