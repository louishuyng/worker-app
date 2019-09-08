import { handleSubmitFormikInterface } from 'screens/hoc/withConnectFormik';
import { RouteName } from 'constant';
import { ActionsObservable } from 'redux-observable';
import authActions from 'store/auth/AuthActions';
import { ActionType } from 'typesafe-actions';

export interface FormikAuthValues {
  email?: string,
  password?: string,
  repaetPassword?: string,
  firstName?: string,
  lastName?: string,
  phoneNumber?: string,
  department?: string,
}

export const InitMapPropsLogin = {
  email: '',
  password: '',
};

export const InitMapPropsSignUpStepOne = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
};

export const InitMapPropsSignUpStepTwo = {
  department: '',
  password: '',
  repeatPassword: '',
};

export const handleSubmitLogin: handleSubmitFormikInterface = (
  values: FormikAuthValues,
  navigation,
  action: any,
) => {
  const callback = () => navigation.navigate(RouteName.MAIN);

  const handleError = (err: string) => {
    navigation.navigate(RouteName.ERROR, { message: err });
  };

  return action(values, callback, handleError);
};

export const handleSubmitSignUpStepOne: handleSubmitFormikInterface = (
  values: FormikAuthValues, navigation, action
) => {
  action();
  navigation.navigate(RouteName.SIGN_UP_STEP_TWO);
};

export const handleSubmitSignUpStepTwo: handleSubmitFormikInterface = (
  values: FormikAuthValues, navigation, action
) => {
  action();
  navigation.navigate(RouteName.SIGN_IN);
};
