import { combineReducers } from 'redux';

import { demoReducer } from 'store/demo/demoReducer';

export const rootReducer = combineReducers({
  demoState: demoReducer,
});
