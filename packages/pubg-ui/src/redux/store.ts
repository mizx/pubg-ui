import { createStore, applyMiddleware, compose, Store } from 'redux';

import { RootState, rootReducer } from './root';

const composeEnhancers = (
  process.env.NODE_ENV === 'development'
  && window
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const configureStore = (initialState?: RootState) => {
  // configure middlewares
  // const middlewares = [ ];

  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware()
  );

  return createStore<RootState>(
    rootReducer,
    initialState!,
    enhancer
  );
};

const store = configureStore();

export default store;
