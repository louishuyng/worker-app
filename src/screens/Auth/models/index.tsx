import { handleSubmitFormikInterface } from 'screens/hoc/withConnectFormik';
import { RouteName } from 'constant';

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

export const handleSubmitLogin: handleSubmitFormikInterface = (values: FormikAuthValues, navigation) => {
  navigation.navigate(RouteName.MAIN);
};

export const handleSubmitSignUpStepOne: handleSubmitFormikInterface = (values: FormikAuthValues, navigation) => {
  navigation.navigate(RouteName.SIGN_UP_STEP_TWO);
};

export const handleSubmitSignUpStepTwo: handleSubmitFormikInterface = (values: FormikAuthValues, navigation) => {
  navigation.navigate(RouteName.SIGN_IN);
};
