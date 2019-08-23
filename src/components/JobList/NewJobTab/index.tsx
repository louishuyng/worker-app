import React from 'react';
import styled from 'styled-components/native';

import { JobDetail, WorkingHourInterface } from '../type';
import { JobThumbnail } from '../shared/JobThumbnail';
import { NoJobThumbnail } from '../shared/NoJobThumbnail';

const Wrapper = styled.View`
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
  padding-left: 10;
`;

interface NewJobTabProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  currentWorkingHour: Array<WorkingHourInterface>;
  navigation: { navigate: Function }
}

const NewJobTab = (props: NewJobTabProps) => {
  const { jobData, currentWorkingHour } = props;
  const isEmptyJob = jobData.length === 0;
  const displayJobThumnail = (data: Array<JobDetail>) => {
    return data.map((value: JobDetail, index: number) => (
      <JobThumbnail key={index} jobData={value} />
    ));
  };

  return (
    <Wrapper>
      {!isEmptyJob ? displayJobThumnail(jobData) : <NoJobThumbnail hourWorkingData={currentWorkingHour} {...props} />}
    </Wrapper>
  );
};

export default NewJobTab;
