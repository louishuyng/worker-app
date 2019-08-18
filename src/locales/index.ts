import LocalizedStrings from 'react-native-localization';

const strings: any = new LocalizedStrings({
  en: {
    auth: {
      LOGIN_TITLE: 'Log In',
      SIGNUP_TITLE: 'Sign Up',
      STEP_ONE: 'Step 1',
      STEP_TWO: 'Step 2',
      FIRST_NAME: 'First Name',
      LAST_NAME: 'Last Name',
      PHONE_NUMBER: 'Phone Number',
      PLACE_HOLDER_PHONE: '+X (XXX) XXX XXXX',
      EMAIL: 'Email',
      PLACE_HOLDER_EMAIL: 'example.email@coned.com',
      PASSWORD: 'Password',
      REPEAT_PASSWORD: 'Repeat Password',
      FORGET_PASSWORD: 'Forget Password',
      DEPARTMENT: 'Department',
      SUGGESTION_SIGN_UP: 'Already have an account?',
      SUGGESTION_SIGN_IN: 'Don’t have an account?',
      SIGNUP_BUTTON_LABLE_STEP_ONE: 'Next  →',
      SIGNUP_BUTTON_LABLE_STEP_TWO: 'Create Account',
      LOGIN_BUTTON_LABLE: 'Log In',
    },
    screen: {
      LOGIN: 'SignIn',
      SIGN_UP_STEP_ONE: 'SignUpStepOne',
      SIGN_UP_STEP_TWO: 'SignUpStepTwo',
      MAIN: 'Main',
    },
  },
});

export const getString = (prefix: string, str: string) => {
  return strings[prefix][str];
};
