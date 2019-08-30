import { handleSubmitFormikInterface } from 'screens/hoc/withConnectFormik';
import { RouteName } from 'constant';

interface FormikSignTimeSheet {
  superviorName: string;
}

export const InitMapPropsSignTimeSheet: FormikSignTimeSheet = {
  superviorName: '',
};

export const handleSubmit: handleSubmitFormikInterface = (values: FormikSignTimeSheet, navigation) => {
  navigation.navigate(RouteName.JOB_LIST);
};
