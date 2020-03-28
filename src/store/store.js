import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/redu_root';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
