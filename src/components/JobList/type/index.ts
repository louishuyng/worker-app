import { TimeWorkHourFormat } from 'components/workHours/type';

export enum JobStatus {
  ENROUTE,
  LOCATION,
  SECURED,
  ENDOFSHIFT,
  CREATETIMESHEET,
}

export enum ProgressStatus {
  NEWJOB,
  INPROGRESS,
  REVIEW,
}

export interface WorkingHourInterface {
  begin: string;
  end: string;
}

export interface JobDetail {
  date: Date;
  location?: string;
  jobName: string,
  timeAvaliable: TimeWorkHourFormat;
  status: JobStatus,
}
