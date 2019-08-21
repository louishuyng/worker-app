import { combineReducers } from 'redux';
import { delay } from 'redux-saga/effects';

import { demoReducer } from 'store/demo/demoReducer';

export const rootReducer = combineReducers({
  demoState: demoReducer,
});

export function * rootSaga() {
  yield delay(1000);
};
