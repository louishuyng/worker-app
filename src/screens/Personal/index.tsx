
import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import { EmailPersonalComponent, PhonePersonalComponent } from 'components/Personal';
import {
  handleSavePersonalEmail,
  InitMapPropsPersonalEmail, handleSavePersonalPhone,
  InitMapPropsPersonalPhone } from './models';
import { emailPersonalSchema, phonePersonalSchema } from './validation';

export const EmailPersonalScreen = withConnectFormik({
  Component: EmailPersonalComponent,
  customSchema: emailPersonalSchema,
  displayName: 'Email Personal',
  handleSubmit: handleSavePersonalEmail,
  initMapProps: InitMapPropsPersonalEmail,
});

export const PhonePersonalScreen = withConnectFormik({
  Component: PhonePersonalComponent,
  customSchema: phonePersonalSchema,
  displayName: 'Phone Personal',
  handleSubmit: handleSavePersonalPhone,
  initMapProps: InitMapPropsPersonalPhone,
});
