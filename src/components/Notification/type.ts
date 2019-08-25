export enum TypeNotifcation {
  JOB_CANCALLED,
  JOB_ASSIGN,
}

export interface Notification {
  title: string;
  jobName: string;
  location: string;
  timestamp: string;
  isRead: boolean;
  type: TypeNotifcation;
}
