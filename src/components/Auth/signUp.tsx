import React from 'react';

import AuthScreen from './shared/layout';
import { AuthStage } from './models/authScreenConfig';

export const SignUpStepOneComponent = (props: any) => <AuthScreen stage={AuthStage.SIGNUP_STEP_ONE} {...props} />;
export const SignUpStepTwoComponent = (props: any) => <AuthScreen stage={AuthStage.SIGNUP_STEP_TWO} {...props} />;
