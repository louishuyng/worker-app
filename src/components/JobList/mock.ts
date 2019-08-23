import { JobStatus, JobDetail, WorkingHourInterface } from './type';

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
    date: '03/04/2019',
    status: JobStatus.ENROUTE,
  },
];

export const mockCurrentWorkingHour: Array<WorkingHourInterface> = [
  // {
  //   begin: '02:00',
  //   end: '18:00',
  // },
];
