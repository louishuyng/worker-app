import { createAction } from 'typesafe-actions';

export default {
  createToken: createAction('CREATE_TOKEN',
    (action) => (values: any, callback: any, handleError: any) => action({
      values,
      callback,
      handleError,
    })
  ),
  createTokenSuccess: createAction('CREATE_TOKEN_SUCCESS', (payload) => payload),
  createTokenFailed: createAction('CREATE_TOKEN_FAILED', (payload) => payload),
};
