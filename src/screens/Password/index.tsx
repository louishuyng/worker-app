import { SendMailComponent, ResetPasswordComponent, ConfirMailComponent } from 'components/Password';

import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import { sendEmailValidationSchema, resetPasswordValidationSchema } from './validation';
import {
  InitMapPropsResetPassword, InitMapPropsSendEmail,
  handleSubmitResetPassword, handleSubmitSendEmail,
} from './models';

export const SendEmailScreen = withConnectFormik({
  Component: SendMailComponent,
  customSchema: sendEmailValidationSchema,
  displayName: 'SendEmail',
  handleSubmit: handleSubmitSendEmail,
  initMapProps: InitMapPropsSendEmail,
});

export const ResetPasswordScreen = withConnectFormik({
  Component: ResetPasswordComponent,
  customSchema: resetPasswordValidationSchema,
  displayName: 'ResetPassword',
  handleSubmit: handleSubmitResetPassword,
  initMapProps: InitMapPropsResetPassword,
});

export const ConfirmMailScreen = ConfirMailComponent;
