import {
  call, all, takeLatest, put,
} from 'redux-saga/effects';

import { updateUserData, login } from 'store/auth/AuthActions';
import { authApi } from 'api';

function * loginSaga(action: {payload: any}) {
  const { values } = action.payload;
  try {
    const response = yield call([authApi, authApi.login], values);
    yield put(updateUserData({ user: response.data, isAuth: true }));
  } catch (errors) {
    // Do nothing now
  } finally {
    // Do nothing now
  }
}

export default function * () {
  yield all([
    takeLatest(login, loginSaga),
  ]);
}
