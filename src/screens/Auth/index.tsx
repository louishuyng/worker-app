import { SignUpStepOneComponent, SignUpStepTwoComponent, SignInComponent } from 'components/Auth';

import { withConnectFormik } from 'screens/hoc/withConnectFormik';
import { signUpStepOneValidationShcema, signUpStepTwoValidationShcema, signInValidationSchema } from './validation';
import {
  handleSubmitSignUpStepOne, InitMapPropsSignUpStepOne, handleSubmitSignUpStepTwo,
  InitMapPropsSignUpStepTwo,
  handleSubmitLogin,
  InitMapPropsLogin,
} from './models';

export const SignUpStepOneScreen = withConnectFormik({
  Component: SignUpStepOneComponent,
  customSchema: signUpStepOneValidationShcema,
  displayName: 'SignUpStepOne',
  handleSubmit: handleSubmitSignUpStepOne,
  initMapProps: InitMapPropsSignUpStepOne,
});

export const SignUpStepTwoScreen = withConnectFormik({
  Component: SignUpStepTwoComponent,
  customSchema: signUpStepTwoValidationShcema,
  displayName: 'SignUpStepTwo',
  handleSubmit: handleSubmitSignUpStepTwo,
  initMapProps: InitMapPropsSignUpStepTwo,
});

export const SignInScreen = withConnectFormik({
  Component: SignInComponent,
  customSchema: signInValidationSchema,
  displayName: 'SignUpStepTwo',
  handleSubmit: handleSubmitLogin,
  initMapProps: InitMapPropsLogin,
});
