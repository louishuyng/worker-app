import { handleSubmit, InitMapPropsSignTimeSheet } from './models';
import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import SignTimeSheet from 'components/SignTimeSheet';
import { signTimSheetValidationSchema } from './validation';

export const SignTimeSheetScreen = withConnectFormik({
  Component: SignTimeSheet,
  displayName: 'SignTimeSheet',
  handleSubmit: handleSubmit,
  initMapProps: InitMapPropsSignTimeSheet,
  customSchema: signTimSheetValidationSchema,
});
