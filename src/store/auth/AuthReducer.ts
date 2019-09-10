import { ActionType, createReducer } from 'typesafe-actions';

import authActions from 'store/auth/AuthActions';
import { RequestToken } from 'api/models';

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
    authActions.createTokenSuccess,
  ], (state: any, action: any) => {
    const { payload } : {payload: RequestToken } = action;
    return {
      ...state,
      isAuth: payload && payload.requestToken && true,
    };
  }
  )
  .handleAction([
    authActions.createTokenFailed,
  ], (state: any) => {
    return {
      ...state,
      isAuth: false,
    };
  }
  )
;
