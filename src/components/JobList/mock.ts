import { JobStatus, JobDetail, WorkingHourInterface } from './type';
import { TimeFormat } from 'components/workHours/type';
import { TypeNotifcation } from 'components/Notification/type';

const mockDate = new Date();

export const mockJobDataReview: Array<JobDetail> = [
  {
    timeAvaliable: {
      begin: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
      end: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.REVIEW,
    type: TypeNotifcation.JOB_CANCALLED,
    isRead: true,
  },
  {
    timeAvaliable: {
      begin: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
      end: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.REVIEW,
    type: TypeNotifcation.JOB_ASSIGN,
    isRead: true,
  },
];

export const mockJobData: Array<JobDetail> = [
  {
    timeAvaliable: {
      begin: {
        hour: 9,
        minute: 30,
      },
      end: {
        hour: 18,
        minute: 30,
      },
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.ENROUTE,
    type: TypeNotifcation.JOB_CANCALLED,
    isRead: true,
  },
  {
    timeAvaliable: {
      begin: {
        hour: 19,
        minute: 30,
      },
      end: {
        hour: 24,
        minute: 30,
      },

    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.LOCATION,
    type: TypeNotifcation.JOB_ASSIGN,
    isRead: true,
  },
  {
    timeAvaliable: {
      begin: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
      end: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.SECURED,
    type: TypeNotifcation.JOB_ASSIGN,
    isRead: false,
  },
  {
    timeAvaliable: {
      begin: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
      end: {
        hour: mockDate.getHours(),
        minute: mockDate.getMinutes(),
      },
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.ENDOFSHIFT,
    type: TypeNotifcation.JOB_CANCALLED,
    isRead: false,
  },
];

export const mockCurrentWorkingHour: Array<TimeFormat> = [
  {
    begin: {
      hour: 2,
      minute: 0,
    },
    end: {
      hour: 18,
      minute: 0,
    },
  },
];
