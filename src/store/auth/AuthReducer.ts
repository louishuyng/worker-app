import { ActionType, createReducer } from 'typesafe-actions';

import authActions from 'store/auth/AuthActions';

export type AuthActions = ActionType<typeof authActions>;

export interface AuthState {
  isAuth: boolean;
  err: string;
}

const initialState = {
  isAuth: false,
  err: '',
} as AuthState;

export default createReducer<AuthState, AuthActions>(initialState)
  .handleAction([
    authActions.createUser,
    authActions.createToken,
  ], (state) => ({ ...state, isAuth: true }))
;
