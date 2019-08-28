import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { JobDetail } from '../type';
import { JobThumbnail, NoJobThumbnail, WrapperJobList } from '../shared';
import { TimeFormat } from 'components/workHours/type';
import { LOCATION } from 'utils/Icons';

interface NewJobTabProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  currentWorkingHour: Array<TimeFormat>;
  navigation: NavigationScreenProp<any>;
}

const NewJobTab = (props: NewJobTabProps) => {
  const { jobData, currentWorkingHour } = props;
  const isEmptyJob = true;
  const displayJobThumnail = (data: Array<JobDetail>) => {
    return data.map((value: JobDetail, index: number) => (
      <JobThumbnail
        ButtonIcon={LOCATION}
        key={index}
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
