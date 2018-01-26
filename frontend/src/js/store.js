import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './utils/logger-middleware';
import user from './user/reducer';
import search from './search/reducer';

const rootReducer = combineReducers({
  user,
  search
});

const middleware = [
  thunkMiddleware,
  loggerMiddleware
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
