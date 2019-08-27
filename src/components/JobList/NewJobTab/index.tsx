import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { JobDetail } from '../type';
import { JobThumbnail, NoJobThumbnail, WrapperJobList } from '../shared';
import { TimeWorkHourFormat } from 'components/workHours/type';

interface NewJobTabProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  currentWorkingHour: Array<TimeWorkHourFormat>;
  navigation: NavigationScreenProp<any>;
}

const NewJobTab = (props: NewJobTabProps) => {
  const { jobData, currentWorkingHour } = props;
  const isEmptyJob = true;
  const displayJobThumnail = (data: Array<JobDetail>) => {
    return data.map((value: JobDetail, index: number) => (
      <JobThumbnail
        isButtonAppear key={index}
        jobData={value}
      />
    ));
  };

  return (
    <WrapperJobList>
      {!isEmptyJob ? displayJobThumnail(jobData) : <NoJobThumbnail hourWorkingData={currentWorkingHour} {...props} />}
    </WrapperJobList>
  );
};

export default NewJobTab;
