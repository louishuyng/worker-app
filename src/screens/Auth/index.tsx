import { SignUpStepOneComponent, SignUpStepTwoComponent, SignInComponent } from 'components/Auth';
import { withConnectFormikAuth } from './withConnectFormikAuth';

import { AuthStage } from 'components/Auth/models/authScreenConfig';

export const SignUpStepOneScreen = withConnectFormikAuth({
  Component: SignUpStepOneComponent, stage: AuthStage.SIGNUP_STEP_ONE,
});

export const SignUpStepTwoScreen = withConnectFormikAuth({
  Component: SignUpStepTwoComponent, stage: AuthStage.SIGNUP_STEP_TWO,
});

export const SignInScreen = withConnectFormikAuth({
  Component: SignInComponent, stage: AuthStage.LOGIN,
});
