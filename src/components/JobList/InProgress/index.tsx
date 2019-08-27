
import React from 'react';

import { JobDetail, ProgressStatus } from '../type';
import { JobThumbnail, NoJobThumbnail, WrapperJobList } from '../shared';
import { TimeWorkHourFormat } from 'components/workHours/type';

interface InProgressProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  currentWorkingHour: Array<TimeWorkHourFormat>;
  navigation: { navigate: Function }
}

const InProgress = (props: InProgressProps) => {
  const { jobData, currentWorkingHour } = props;
  const isEmptyJob = jobData.length === 0;
  const displayJobThumnail = (data: Array<JobDetail>) => {
    return data.map((value: JobDetail, index: number) => (
      <JobThumbnail
        isButtonAppear
        key={index}
        jobData={value}
        progressStatus={ProgressStatus.INPROGRESS}
      />
    ));
  };

  return (
    <WrapperJobList>
      {!isEmptyJob
        ? displayJobThumnail(jobData)
        : <NoJobThumbnail hourWorkingData={currentWorkingHour} {...props} />}
    </WrapperJobList>
  );
};

export default InProgress;
