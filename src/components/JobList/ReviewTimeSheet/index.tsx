import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { JobDetail } from '../type';
import { JobThumbnail, WrapperJobList } from '../shared';
import { LOCATION } from 'utils/Icons';

interface InProgressProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  navigation: NavigationScreenProp<any> ;
}

const ReviewTimeSheet = (props: InProgressProps) => {
  const { jobData } = props;

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
      {displayJobThumnail(jobData)}
    </WrapperJobList>
  );
};

export default ReviewTimeSheet;
