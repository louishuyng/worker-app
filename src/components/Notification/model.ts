import { TypeNotifcation } from './type';

import { getString } from 'locales';

type modelNotificationInterface = {
  [key in TypeNotifcation]: string;
}

export const notificationTitleModel: modelNotificationInterface = {
  [TypeNotifcation.JOB_ASSIGN]: getString('notification', 'cancelledTitle'),
  [TypeNotifcation.JOB_CANCALLED]: getString('notification', 'assignedJob'),
};
