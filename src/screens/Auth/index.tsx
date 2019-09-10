import { connect } from 'react-redux';

import { SignUpStepOneComponent, SignUpStepTwoComponent, SignInComponent } from 'components/Auth';

import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import { signUpStepOneValidationShcema, signUpStepTwoValidationShcema, signInValidationSchema } from './validation';
import {
  handleSubmitSignUpStepOne, InitMapPropsSignUpStepOne, handleSubmitSignUpStepTwo,
  InitMapPropsSignUpStepTwo,
  handleSubmitLogin,
  InitMapPropsLogin,
} from './models';
import { login } from 'store/auth/AuthActions';

export const SignUpStepOneScreen = withConnectFormik({
  Component: SignUpStepOneComponent,
  customSchema: signUpStepOneValidationShcema,
  displayName: 'SignUpStepOne',
  onSubmit: handleSubmitSignUpStepOne,
  initMapProps: InitMapPropsSignUpStepOne,
  actionKey: '',
});

export const SignUpStepTwoScreen = withConnectFormik({
  Component: SignUpStepTwoComponent,
  customSchema: signUpStepTwoValidationShcema,
  displayName: 'SignUpStepTwo',
  onSubmit: handleSubmitSignUpStepTwo,
  initMapProps: InitMapPropsSignUpStepTwo,
  actionKey: '',
});

export const SignInScreen = connect(
  null, { createUser: login }
)(withConnectFormik({
  Component: SignInComponent,
  customSchema: signInValidationSchema,
  displayName: 'SignUpStepTwo',
  onSubmit: handleSubmitLogin,
  initMapProps: InitMapPropsLogin,
  actionKey: 'createUser',
}));
