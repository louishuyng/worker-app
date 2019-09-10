import { handleActions } from 'redux-actions';
import { updateUserData } from './AuthActions';

const initialState = {
  isAuth: false,
  role: null,
};

export default handleActions({
  [`${updateUserData}`]: (state: {isAuth: boolean, role: any}, action: {payload: any}) => ({
    ...state, ...action.payload,
  }),
}, initialState);
