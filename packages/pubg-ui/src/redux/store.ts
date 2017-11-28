import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';

import { history } from '../history';
import { RootState, rootReducer, rootEpic } from './index';
import { loadState, saveState } from './localStorage';

const composeEnhancers = (
  process.env.NODE_ENV !== 'production'
  && window
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const configureStore = (initialState?: RootState) => {
  // configure middlewares
  const middlewares = [
    createEpicMiddleware(rootEpic),
    routerMiddleware(history),
  ];

  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  return createStore<RootState>(
    rootReducer,
    initialState!,
    enhancer
  );
};

const persistedState = loadState<RootState>();

const store = configureStore(persistedState);

store.subscribe(() => {
  const { option } = store.getState();

  saveState({ option });
});

export default store;
