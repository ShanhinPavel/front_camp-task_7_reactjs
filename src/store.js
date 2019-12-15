import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { allReducers } from './reducers';
import { filmDetailsAction } from './actions';

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(filmDetailsAction());
