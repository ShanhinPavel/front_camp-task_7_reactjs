const initialfilmListReducer = []

export const filmListReducer = function(state = initialfilmListReducer, action) {
  switch (action.type) {
    case 'FILM_LIST_SUCCESS':
      return [...state, ...action.films]
  }
  return state;
}