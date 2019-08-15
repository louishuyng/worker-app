import { createAction } from 'typesafe-actions';

export const demoActions = {
  getAccountDetail: createAction('GET_ACCOUNT_DETAIL', (action) => action),
}
;
