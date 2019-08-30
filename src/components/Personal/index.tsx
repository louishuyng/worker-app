
import React from 'react';

import PersonalScreen from './shared';
import { PersonalStage } from './models/personalScreenConfig';

export const EmailPersonalComponent = (props: any) => (<PersonalScreen stage={PersonalStage.EMAIL} {...props}/>);
export const PhonePersonalComponent = (props: any) => (<PersonalScreen stage={PersonalStage.PHONE} {...props}/>);
