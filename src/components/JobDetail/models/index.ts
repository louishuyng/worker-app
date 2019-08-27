import { getString } from 'locales';

export const TitleTimeData = [
  getString('jobDetail', 'requestHour'),
  getString('jobDetail', 'hours'),
];

export const TitleDetailsOneData = [
  getString('jobDetail', 'requestor'),
  getString('jobDetail', 'supervisor'),
  getString('jobDetail', 'department'),
];

export const TitleDetailsTwoData = [
  [getString('jobDetail', 'section'), getString('jobDetail', 'feeder')],
  [getString('jobDetail', 'confirm'), getString('jobDetail', 'wr')],
  [getString('jobDetail', 'po'), getString('jobDetail', 'account')],
];
