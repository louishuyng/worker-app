
import {
  InitMapPropsWorkHours,
  handleSubmitWorkHours,
} from './models';
import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import WorkHoursComponent from 'components/workHours';

export const WorkHoursScreen = withConnectFormik({
  Component: WorkHoursComponent,
  displayName: 'WorkHour',
  handleSubmit: handleSubmitWorkHours,
  initMapProps: InitMapPropsWorkHours,
});
