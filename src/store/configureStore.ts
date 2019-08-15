
import { rootReducer } from 'store/root';
import {
  createStore,
} from 'redux';

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (initialState?: AppState) => {
  const reduxExtension = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';

  const store = createStore(
    rootReducer,
    initialState,
  );

  return store;
};

export default configureStore;
