import { GET_SORT_TYPE } from '../constants';
import { sortBy } from '../services';

const initialSortByReducer = sortBy.RELEASE_DATE;

export const sortByReducer = function (state = initialSortByReducer, action) {
  switch (action.type) {
    case GET_SORT_TYPE:
      return action.sortType;
  }
  return state;
};
