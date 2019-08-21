
import { Middleware, StoreEnhancer, applyMiddleware, createStore, compose } from 'redux';

import { rootReducer } from 'store/root';
import createSagaMiddleware from 'redux-saga';

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (initialState?: AppState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
  const middlewareEnhancer: StoreEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middlewareEnhancer),
  );

  return store;
};

export default configureStore;
