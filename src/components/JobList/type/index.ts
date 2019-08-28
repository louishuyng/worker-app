import { TimeFormat } from 'components/workHours/type';
import { TypeNotifcation } from 'components/Notification/type';

export enum JobStatus {
  NEW,
  ENROUTE,
  LOCATION,
  SECURED,
  ENDOFSHIFT,
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
  timeAvaliable: TimeFormat;
  status: JobStatus,
  isRead: boolean,
  type: TypeNotifcation,
}
