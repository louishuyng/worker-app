import { createActions } from 'redux-actions';

import { ActionTypes } from 'constant';

export const {
  login,
  updateUserData,
} = createActions({
  [ActionTypes.LOGIN]: ({ values, meta } : { values: Object, meta: Object }) => ({ values, meta }),
  [ActionTypes.UPDATE_USER_DATA]: ({
    user, isAuth,
  }: { user: Object, isAuth: boolean }) => ({ user, isAuth }),
});
