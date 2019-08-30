import { handleSubmitFormikInterface } from 'screens/hoc/withConnectFormik';
import { RouteName } from 'constant';

interface FormikPasswordValues {
  email: string,
  password: string,
  repeatPassword: string,
}

export const InitMapPropsSendEmail = {
  email: '',
};

export const InitMapPropsResetPassword = {
  password: '',
  rePassword: '',
};

export const handleSubmitSendEmail: handleSubmitFormikInterface = (values: FormikPasswordValues, navigation) => {
  navigation.navigate(RouteName.CONFIRM_MAIL);
};

export const handleSubmitResetPassword: handleSubmitFormikInterface = (values: FormikPasswordValues, navigation) => {
  navigation.navigate(RouteName.SIGN_IN);
};
