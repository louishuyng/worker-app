import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

import { JobDetail } from '../type';
import { JobThumbnail, WrapperJobList } from '../shared';
import { LOCATION, IC_ARROW, IC_BACK } from 'utils/Icons';
import { ImageSourcePropType } from 'react-native';

interface InProgressProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  navigation: NavigationScreenProp<any>;
}

const InProgress = (props: InProgressProps) => {
  const { jobData, navigation } = props;

  const displayJobThumnail = (data: Array<JobDetail>) => {
    return data.map((value: JobDetail, index: number) => (
      <JobThumbnail
        ButtonIcon={LOCATION}
        key={index}
        jobData={value}
        navigation={navigation}
      />
    ));
  };

  return (
    <WrapperJobList>
      {displayJobThumnail(jobData)}
    </WrapperJobList>
  );
};

export default InProgress;
