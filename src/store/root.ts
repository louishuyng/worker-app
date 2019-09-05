import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import authReducer from './auth/AuthReducer';
import authEpics from './auth/AuthEpics';

export const rootReducer = combineReducers({
  authState: authReducer,
});

export const rootEpic = combineEpics(...authEpics);
