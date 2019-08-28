import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import { handleSubmitCreateTimeSheet, InitMapPropsTimeSheet } from './models';
import TimeSheet from 'components/TimeSheet';

export const TimeSheetScreen = withConnectFormik({
  Component: TimeSheet,
  displayName: 'TimeSheet',
  handleSubmit: handleSubmitCreateTimeSheet,
  initMapProps: InitMapPropsTimeSheet,
});
