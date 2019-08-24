import { getString } from 'locales';

export const nameRegExp = /^[a-zA-Z0-9]+$/;
export const emailRegExp = /\S+@\S+\.\S+/;
export const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const baseScreenWidth = 375;
export const baseScreenHeight = 733;

export const RouteName = {
  SIGN_IN: getString('screen', 'LOGIN'),
  SIGN_UP_STEP_ONE: getString('screen', 'SIGN_UP_STEP_ONE'),
  SIGN_UP_STEP_TWO: getString('screen', 'SIGN_UP_STEP_TWO'),
  MAIN: getString('screen', 'MAIN'),
  SEND_MAIL: getString('screen', 'SEND_MAIL'),
  CONFIRM_MAIL: getString('screen', 'CONFIRM_MAIL'),
  RESET_PASSWORD: getString('screen', 'RESET_PASSWORD'),
  JOB_LIST: getString('screen', 'JOB_LIST'),
  WORK_HOURS: getString('screen', 'WORK_HOURS'),
  PROFILE: getString('screen', 'PROFILE'),
  CALENDAR: getString('screen', 'CALENDAR'),
  AGENDA: getString('screen', 'AGENDA'),
};
