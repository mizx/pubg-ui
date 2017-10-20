import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { RootState, rootReducer, rootEpic } from './modules';

const composeEnhancers = (
  process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const configureStore  = (initialState?: RootState) => {
  // configure middlewares
  const middlewares = [
    createEpicMiddleware(rootEpic)
  ];

  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  // create store
  return createStore<RootState>(
    rootReducer,
    initialState!,
    enhancer
  );
};

const store = configureStore();

// hack to get around coherent not binding their custom Promise object fast enough
setTimeout(() => store.dispatch({ type: 'APP::INIT' }), 16);

export default store;