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
      SIGNUP_BUTTON_LABLE_STEP_ONE: 'Next  ',
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
      JOB: 'Job',
      WORK_HOURS: 'Work Hours',
      CALENDAR: 'Calendar',
      PROFILE: 'Profile',
      AGENDA: 'Agenda',
      NOTIFICATION: 'Notifications',
    },
    recovery: {
      RECOVERY_TITLE: 'Password Recovery',
      SEND_MAIL_INSTRUCTION: 'Enter the email you’re using for your account.',
      SEND_MAIL_DESCIPTION:
        'We’ve sent password reset instructions to your email address' +
        '.If no email is received within ten minutes, check that the submitted address is correct.',
      EMAIL: 'Email',
      NEW_PASSWORD: 'New Password',
      CONFIRM_PASSWORD: 'Confirm Password',
      CONTINUE: 'Continue',
      BACK_TO_LOGIN: 'Back to Login',
      RESET_PASSWORD: 'Reset Password',
    },
    jobList: {
      newJobTabTitle: 'NEW JOBS',
      inProgressTabTitle: 'IN PROGRESS',
      complitedTabTitle: 'COMPLITED',
      billedTabTitle: 'BILLED',
      paidTabTitle: 'PAID',
      reviewTimeSheetTabTitle: 'Review TimeSheet',
      noJobTitle: 'No jobs assigned',
      noJobSubTitle: 'You are set as available for work',
      between: 'betwwen ',
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
      createTimeSheet: 'Create Timesheet',
      locationHint: 'OnLocation',
      enrouteHint: 'OnEnroute',
      securedHint: 'OnSecured',
      endOfShiftHint: 'OnEndOfShift',
    },
    modal: {
      jobCancelledTitle: 'Job has been cancelled!',
      skipSignature: 'Why do you want to skip signature?',
      cancel: 'Cancel',
      set: 'Set',
      ok: 'Ok',
      skip: 'Skip',
      setEnroute: 'Set Status to Enroute',
      setSecured: 'Set Status to Secured',
      setLocation: 'Set Status to Location',
      setEndOfShift: 'Set Status to End Of Shift',
    },
    workHours: {
      save: 'Save',
      add: '+  Add Hours',
      from: 'From',
      to: 'To',
    },
    profile: {
      availabelTitle: 'Available for Work',
      cannotChange: 'You cannot change the data because you are assigned to a job',
      from: 'From',
      to: 'to',
      personalInfo: 'PERSONAL INFORMATION',
      email: 'Email',
      phone: 'Phone',
      settings: 'Settings',
    },
    notification: {
      new: 'New',
      seen: 'Seen',
      cancelledTitle: 'Job has been cancelled',
      assignedJob: 'Assigned new job',
    },
    calendar: {
      goJobPage: 'Go to Job Page  ',
    },
    jobDetail: {
      address: 'Address',
      time: 'Time',
      details: 'Details',
      comments: 'Comments',
      requestHour: 'Request Date/Time',
      hours: 'Hours',
      requestor: 'Requestor',
      supervisor: 'Supervisor',
      department: 'Department',
      section: 'Section',
      feeder: 'Feeder #',
      confirm: 'Confirmation #',
      wr: 'WR #',
      po: 'PO #',
      account: 'Account #',
    },
  },
});

export const getString = (prefix: string, str: string) => {
  return strings[prefix][str];
};
