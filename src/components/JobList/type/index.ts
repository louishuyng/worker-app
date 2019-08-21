export interface TimeFormat {
  begin: string;
  end: string;
}

export enum JobStatus {
  ENROUTE,
  LOCATION,
  SECURED,
  ENDOFSHIFT,
}

export interface WorkingHourInterface {
  begin: string;
  end: string;
}

export interface JobDetail {
  date: string;
  location: string;
  timeAvaliable: TimeFormat;
  status: JobStatus,
}
