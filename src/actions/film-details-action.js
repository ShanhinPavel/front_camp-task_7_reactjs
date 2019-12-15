export const ADD_FILM_WITH_DETAILS = 'ADD_FILM_WITH_DETAILS';

export const filmDetailsAction = () => {
  return {
    type: ADD_FILM_WITH_DETAILS,
    filmWithDetails: {id: 3535354, title: 'Transformers'}
  }
}

