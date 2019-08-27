import { JobStatus, JobDetail, WorkingHourInterface } from './type';
import { TimeWorkHourFormat } from 'components/workHours/type';

const mockDate = new Date();

export const mockJobData: Array<JobDetail> = [
  {
    timeAvaliable: {
      beginHour: mockDate.getHours(),
      beginMinute: mockDate.getMinutes(),
      endHour: mockDate.getHours(),
      endMinute: mockDate.getMinutes(),
      fieldNameBegin: 'mock1',
      fieldNameEnd: 'mock2',
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.LOCATION,
  },
  {
    timeAvaliable: {
      beginHour: mockDate.getHours(),
      beginMinute: mockDate.getMinutes(),
      endHour: mockDate.getHours(),
      endMinute: mockDate.getMinutes(),
      fieldNameBegin: 'mock1',
      fieldNameEnd: 'mock2',
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.SECURED,
  },
  {
    timeAvaliable: {
      beginHour: mockDate.getHours(),
      beginMinute: mockDate.getMinutes(),
      endHour: mockDate.getHours(),
      endMinute: mockDate.getMinutes(),
      fieldNameBegin: 'mock1',
      fieldNameEnd: 'mock2',
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.ENDOFSHIFT,
  },
  {
    timeAvaliable: {
      beginHour: mockDate.getHours(),
      beginMinute: mockDate.getMinutes(),
      endHour: mockDate.getHours(),
      endMinute: mockDate.getMinutes(),
      fieldNameBegin: 'mock1',
      fieldNameEnd: 'mock2',
    },
    jobName: 'Parking',
    location: '2569 Land Park Dr, Sacramentro, CA 95818',
    date: mockDate,
    status: JobStatus.CREATETIMESHEET,
  },
];

export const mockCurrentWorkingHour: Array<TimeWorkHourFormat> = [
  {
    beginHour: 2,
    beginMinute: 0,
    endHour: 18,
    endMinute: 0,
    fieldNameBegin: 'From',
    fieldNameEnd: 'To',
  },
];
