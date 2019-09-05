import { createAction } from 'typesafe-actions';

export default {
  createUser: createAction('CREATE_USER', (payload) => payload),
  createToken: createAction('CREATE_TOKEN', (payload) => payload),
  createUserSuccess: createAction('CREATE_USER_SUCCESS', (payload) => payload),
  craeteUserFailed: createAction('CREATE_USER_FAILED', (payload) => payload),
};
