import { NewJobTabStage, TimeFormat, AvailableJob } from './newJobTabConfig';

export interface newJobModel {
  [NewJobTabStage.NOT_YET_SET_AVAILABLE_TIME]: null;
  [NewJobTabStage.ON_SET_AVAILABLE_TIME]: TimeFormat;
  [NewJobTabStage.ON_HAVE_AVAILABLE_JOB]: AvailableJob[]
}

export const newJobData: newJobModel = {
  [NewJobTabStage.NOT_YET_SET_AVAILABLE_TIME]: null,
  [NewJobTabStage.ON_SET_AVAILABLE_TIME]: {
    begin: '02:00',
    end: '18:00',
  },
  [NewJobTabStage.ON_HAVE_AVAILABLE_JOB]: [
    {
      time: {
        begin: '02:00',
        end: '18:00',
      },
      location: 'Da Nang, Viet Nam',
      date: '03/04/2019',
    },
  ],
};
