import { ActionsObservable } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

import { AuthActions } from './AuthReducer';
import authActions from './AuthActions';
import { createUser } from '../../api';

export const createUserEpics = (
  action$: ActionsObservable<AuthActions>
) => action$.pipe(
  filter(isActionOf(authActions.createUser)),
  switchMap((action) => {
    return from(createUser()).pipe(
      map((data) => authActions.createUserSuccess(data)),
      catchError((err) => of(authActions.craeteUserFailed(err.message || err.toString())))
    );
  })
);

export default [createUserEpics];
