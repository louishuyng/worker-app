export enum NewJobTabStage {
  ON_SET_AVAILABLE_TIME,
  NOT_YET_SET_AVAILABLE_TIME,
  ON_HAVE_AVAILABLE_JOB
}

export interface TimeFormat {
  begin: string;
  end: string;
}

export interface AvailableJob {
  date: string;
  location: string;
  time: TimeFormat;
}
