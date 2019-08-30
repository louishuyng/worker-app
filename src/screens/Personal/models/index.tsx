import { handleSubmitFormikInterface } from 'screens/hoc/withConnectFormik';
import { RouteName } from 'constant';

export interface FormikPersonalValues {
  email?: string,
  phone?: string,
}

export const InitMapPropsPersonalEmail = {
  email: '',
};

export const InitMapPropsPersonalPhone = {
  phone: '',
};

export const handleSavePersonalEmail: handleSubmitFormikInterface = (values: FormikPersonalValues, navigation) => {
  navigation.navigate(RouteName.PROFILE);
};

export const handleSavePersonalPhone: handleSubmitFormikInterface = (values: FormikPersonalValues, navigation) => {
  navigation.navigate(RouteName.PROFILE);
};
