import { AuthStage, InputAuthData } from './authScreenConfig';

import { getString } from 'locales';

type AuthForm = {
  [key in AuthStage]: Array<InputAuthData>
}

type AuthTitle = {
  [key in AuthStage]: string
}

export const autFormData: AuthForm = {
  [AuthStage.SIGNUP_STEP_ONE]: [
    {
      title: getString('auth', 'FIRST_NAME'),
    },
    {
      title: getString('auth', 'LAST_NAME'),
    },
    {
      title: getString('auth', 'PHONE_NUMBER'),
      placeholder: getString('auth', 'PLACE_HOLDER_PHONE'),
    },
    {
      title: getString('auth', 'EMAIL'),
      placeholder: getString('auth', 'PLACE_HOLDER_EMAIL'),
    },
  ],
  [AuthStage.SIGNUP_STEP_TWO]: [
    {
      title: getString('auth', 'DEPARTMENT'),
    },
    {
      title: getString('auth', 'PASSWORD'),
    },
    {
      title: getString('auth', 'REPEAT_PASSWORD'),
    },
  ],
  [AuthStage.LOGIN]: [
    {
      title: getString('auth', 'EMAIL'),
    },
    {
      title: getString('auth', 'PASSWORD'),
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
  [AuthStage.SIGNUP_STEP_ONE]: getString('auth', 'SIGNUP_BUTTON_LABLE_STEP_ONE'),
  [AuthStage.SIGNUP_STEP_TWO]: getString('auth', 'SIGNUP_BUTTON_LABLE_STEP_TWO'),
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

export const authNavigatorData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: getString('screen', 'SIGN_UP_STEP_TWO'),
  [AuthStage.SIGNUP_STEP_TWO]: getString('screen', 'LOGIN'),
  [AuthStage.LOGIN]: getString('screen', 'MAIN'),
};

export const authSubNavigatorData: AuthTitle = {
  [AuthStage.SIGNUP_STEP_ONE]: getString('screen', 'LOGIN'),
  [AuthStage.SIGNUP_STEP_TWO]: getString('screen', 'LOGIN'),
  [AuthStage.LOGIN]: getString('screen', 'SIGN_UP_STEP_ONE'),
};
