import { AuthStage, InputAuthData } from './authScreenConfig';

import { getString } from 'locales';
import { RouteName } from 'constant';
import { ImageSourcePropType } from 'react-native';
import { IC_ICON_RIGHT_ARROW } from 'utils/Icons';

type AuthForm = { [key in AuthStage]: Array<InputAuthData> };

type AuthTitle = { [key in AuthStage]: string };

type AuthIcon = { [key in AuthStage]?: ImageSourcePropType | undefined };

export const autFormData: AuthForm = {
  [AuthStage.SIGNUP_STEP_ONE]: [
    {
      label: getString('auth', 'FIRST_NAME'),
      fieldName: 'firstName',
      type: 'text',
      keyboardType: 'default',
    },
    {
      label: getString('auth', 'LAST_NAME'),
      fieldName: 'lastName',
      type: 'text',
      keyboardType: 'default',
    },
    {
      label: getString('auth', 'PHONE_NUMBER'),
      placeholder: getString('auth', 'PLACE_HOLDER_PHONE'),
      fieldName: 'phoneNumber',
      type: 'number',
      keyboardType: 'phone-pad',
    },
    {
      label: getString('auth', 'EMAIL'),
      placeholder: getString('auth', 'PLACE_HOLDER_EMAIL'),
      fieldName: 'email',
      type: 'email',
      keyboardType: 'email-address',
    },
  ],
  [AuthStage.SIGNUP_STEP_TWO]: [
    {
      label: getString('auth', 'DEPARTMENT'),
      fieldName: 'department',
      type: 'text',
      keyboardType: 'default',
    },
    {
      label: getString('auth', 'PASSWORD'),
      fieldName: 'password',
      type: 'password',
      keyboardType: 'default',
    },
    {
      label: getString('auth', 'REPEAT_PASSWORD'),
      fieldName: 'repeatPassword',
      type: 'password',
      keyboardType: 'default',
    },
  ],
  [AuthStage.LOGIN]: [
    {
      label: getString('auth', 'EMAIL'),
      fieldName: 'email',
      type: 'email-address',
      keyboardType: 'email-address',
    },
    {
      label: getString('auth', 'PASSWORD'),
      fieldName: 'password',
      type: 'password',
      keyboardType: 'default',
    },
  ],
};

export const authTitleData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: getString('auth', 'SIGNUP_TITLE'),
  [AuthStage.SIGNUP_STEP_TWO]: getString('auth', 'SIGNUP_TITLE'),
  [AuthStage.LOGIN]: getString('auth', 'LOGIN_TITLE'),
};

export const authStepData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: getString('auth', 'STEP_ONE'),
  [AuthStage.SIGNUP_STEP_TWO]: getString('auth', 'STEP_TWO'),
  [AuthStage.LOGIN]: '',
};

export const authButtonLabelData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: getString(
    'auth',
    'SIGNUP_BUTTON_LABLE_STEP_ONE'
  ),
  [AuthStage.SIGNUP_STEP_TWO]: getString(
    'auth',
    'SIGNUP_BUTTON_LABLE_STEP_TWO'
  ),
  [AuthStage.LOGIN]: getString('auth', 'LOGIN_BUTTON_LABLE'),
};

export const authSuggestionTitleData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: getString('auth', 'SUGGESTION_SIGN_UP'),
  [AuthStage.SIGNUP_STEP_TWO]: getString('auth', 'SUGGESTION_SIGN_UP'),
  [AuthStage.LOGIN]: getString('auth', 'SUGGESTION_SIGN_IN'),
};

export const authNavigatorTitleData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: getString('auth', 'LOGIN_TITLE'),
  [AuthStage.SIGNUP_STEP_TWO]: getString('auth', 'LOGIN_TITLE'),
  [AuthStage.LOGIN]: getString('auth', 'SIGNUP_TITLE'),
};

export const authAfterIconData: AuthIcon = {
  [AuthStage.SIGNUP_STEP_ONE]: IC_ICON_RIGHT_ARROW,
  [AuthStage.SIGNUP_STEP_TWO]: undefined,
  [AuthStage.LOGIN]: undefined,
};

export const authNavigatorData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: RouteName.SIGN_UP_STEP_TWO,
  [AuthStage.SIGNUP_STEP_TWO]: RouteName.SIGN_IN,
  [AuthStage.LOGIN]: RouteName.MAIN,
};

export const authSubNavigatorData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: RouteName.SIGN_IN,
  [AuthStage.SIGNUP_STEP_TWO]: RouteName.SIGN_IN,
  [AuthStage.LOGIN]: RouteName.SIGN_UP_STEP_ONE,
};
