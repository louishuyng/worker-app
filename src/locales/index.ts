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
      SEND_MAIL: 'SendMail',
      CONFIRM_MAIL: 'ConfirmMail',
      RESET_PASSWORD: 'ResetPassword',
      JOB_LIST: 'Job List',
    },
    recovery: {
      RECOVERY_TITLE: 'Password Recovery',
      SEND_MAIL_INSTRUCTION: 'Enter the email you’re using for your account.',
      SEND_MAIL_DESCIPTION: 'We’ve sent password reset instructions to your email address' +
        '.If no email is received within ten minutes, check that the submitted address is correct.',
      EMAIL: 'Email',
      NEW_PASSWORD: 'New Password',
      CONFIRM_PASSWORD: 'Confirm Password',
      CONTINUE: 'Continue',
      BACK_TO_LOGIN: 'Back to Login',
      RESET_PASSWORD: 'Reset Password',
    },
    jobList: {
      newJobTabTitle: 'New Job',
      inProgressTabTitle: 'In Progress',
      complitedTabTitle: 'Complited',
      billedTabTitle: 'Billed',
      paidTabTitle: 'Paid',
      reviewTimeSheetTabTitle: 'Review TimeSheet',
      noJobTitle: 'No jobs assigned',
      noJobSubTitle: 'You are set as available for work between ',
      and: ' and ',
      today: ' today ',
      tapLabel: 'Tap here',
      suggestionOne: ' to cancel or change availability',
      suggestionTwo: ' to set available for work hours',
      parkingTitle: 'Parking',
      setEnroute: 'Set to Enroute',
      setLocation: 'Set to OnLocation',
      setSecured: 'Set to Secured',
      setEndOfShift: 'Set to End Of Shift',
    },
  },
});

export const getString = (prefix: string, str: string) => {
  return strings[prefix][str];
};
