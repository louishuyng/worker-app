import { TypeNotifcation } from './type';

export const mockData = [
  {
    title: 'Assigned new job',
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramento, CA 95818',
    timestamp: 'Sun Aug 25 2019 22:24:59 GMT+0700',
    isRead: false,
    type: TypeNotifcation.JOB_ASSIGN,
  },
  {
    title: 'Job has been cancelled',
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramento, CA 95818',
    timestamp: 'Sun Aug 25 2019 22:24:59 GMT+0700',
    isRead: false,
    type: TypeNotifcation.JOB_CANCALLED,
  },
  {
    title: 'Assigned new job',
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramento, CA 95818',
    timestamp: 'Sat Aug 24 2019 00:20:16 GMT+0700',
    isRead: true,
    type: TypeNotifcation.JOB_ASSIGN,
  },
  {
    title: 'Job has been cancelled',
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramento, CA 95818',
    timestamp: 'Mon Aug 26 2019 00:20:16 GMT+0700',
    isRead: true,
    type: TypeNotifcation.JOB_CANCALLED,
  },
];
