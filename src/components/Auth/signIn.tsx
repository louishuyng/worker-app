import React from 'react';
import AuthScreen from './shared/layout';

import { AuthStage } from './models/authScreenConfig';

const SignInComponent = (props: any) => (<AuthScreen stage={AuthStage.LOGIN} {...props} />);

export default SignInComponent;
