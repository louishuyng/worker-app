import { ActionsObservable } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { from, empty } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

import { AuthActions } from './AuthReducer';
import authActions from './AuthActions';
import { createToken } from '../../api';

export const createUserEpics = (
  action$: ActionsObservable<AuthActions>
) => action$.pipe(
  filter(isActionOf(authActions.createToken)),
  switchMap((action: any) => {
    const { payload: { callback, values, handleError } } = action;
    return from(createToken(values)).pipe(
      map((data) => {
        if (data.requestToken) callback();
        return authActions.createTokenSuccess(data);
      }),
      catchError((err) => {
        handleError(err.message);
        return empty();
      }),
    );
  })
);

export default [createUserEpics];
