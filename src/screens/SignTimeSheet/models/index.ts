import { handleSubmitFormikInterface } from 'screens/hoc/withConnectFormik';
import { RouteName } from 'constant';

interface FormikSignTimeSheet {
  supervisorName: string;
}

export const InitMapPropsSignTimeSheet: FormikSignTimeSheet = {
  supervisorName: '',
};

export const handleSubmit: handleSubmitFormikInterface = (values: FormikSignTimeSheet, navigation) => {
  navigation.navigate(RouteName.JOB_LIST);
};
