import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'datalayers/reducers/root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from 'datalayers/stores/authMiddleware';
import videosListMiddleware from './videosListMiddleware';
import promiseMiddleware from './promiseMiddleware';

const enhancers = [];
const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
  videosListMiddleware,
  authMiddleware,
];

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const initStore = () => createStore(
  rootReducer,
  {},
  composedEnhancer,
);

const store = initStore();

export default store;
