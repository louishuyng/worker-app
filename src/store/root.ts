import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import authReducer from './auth/AuthReducer';
import auth from './auth/AuthSaga';

export const rootReducer = combineReducers({
  authState: authReducer,
});

export function * rootSaga() {
  yield all([
    fork(auth),
  ]);
}
