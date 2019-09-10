import { getString } from 'locales';

import { keyMirror } from '../utils/keyMirror';

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
  JOB: getString('screen', 'JOB'),
  JOB_CALENDAR: getString('screen', 'JOB'),
  WORK_HOURS: getString('screen', 'WORK_HOURS'),
  WORK_HOURS_JOB_LIST: getString('screen', 'WORK_HOURS'),
  PROFILE: getString('screen', 'PROFILE'),
  CALENDAR: getString('screen', 'CALENDAR'),
  DATE_PICKER: getString('screen', 'DATE_PIKCER'),
  AGENDA: getString('screen', 'AGENDA'),
  NOTIFICATION: getString('screen', 'NOTIFICATION'),
  JOB_NOTIFICATION: getString('screen', 'JOB'),
  CREATE_TIMESHEET: getString('screen', 'CREATE_TIMESHEET'),
  REVIEW_TIMESHEET: getString('screen', 'REVIEW_TIMESHEET'),
  MAPVIEW: getString('screen', 'MAP_VIEW'),
  SIGNATURE: getString('screen', 'SIGNATURE'),
  EMAIL_PERSONAL: getString('screen', 'EMAIL_PERSONAL'),
  PHONE_PERSONAL: getString('screen', 'PHONE_PERSONAL'),
  SIGN_TIME_SHEET: getString('screen', 'SIGN_TIME_SHEET'),
  ERROR: getString('screen', 'ERROR'),
};

export const listNumberHour = [
  { hour: 0, string: '00:00' },
  { hour: 1, string: '01:00' },
  { hour: 2, string: '02:00' },
  { hour: 3, string: '03:00' },
  { hour: 4, string: '04:00' },
  { hour: 5, string: '05:00' },
  { hour: 6, string: '06:00' },
  { hour: 7, string: '07:00' },
  { hour: 8, string: '08:00' },
  { hour: 9, string: '09:00' },
  { hour: 10, string: '10:00' },
  { hour: 11, string: '11:00' },
  { hour: 12, string: '12:00' },
  { hour: 13, string: '13:00' },
  { hour: 14, string: '14:00' },
  { hour: 15, string: '15:00' },
  { hour: 16, string: '16:00' },
  { hour: 17, string: '17:00' },
  { hour: 18, string: '18:00' },
  { hour: 19, string: '19:00' },
  { hour: 20, string: '20:00' },
  { hour: 21, string: '21:00' },
  { hour: 22, string: '22:00' },
  { hour: 23, string: '23:00' },
  { hour: 24, string: '00:00' },
];

// #TODO Update Route Login
export const DEFAULT_PATH = '/';

export const ActionTypes = keyMirror({
  LOGIN: undefined,
  UPDATE_USER_DATA: undefined,
});
