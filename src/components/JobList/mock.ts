import { JobStatus, JobDetail, WorkingHourInterface } from './type';

export const mockJobData: Array<JobDetail> = [
  {
    timeAvaliable: {
      begin: '02:00',
      end: '18:00',
    },
    location: 'Da Nang, Viet Nam',
    date: '03/04/2019',
    status: JobStatus.ENROUTE,
  },
];

export const mockCurrentWorkingHour: Array<WorkingHourInterface> = [
  {
    begin: '02:00',
    end: '18:00',
  },
];
