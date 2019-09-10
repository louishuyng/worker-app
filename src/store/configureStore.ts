
import { Middleware, StoreEnhancer, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from 'store/root';

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

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
