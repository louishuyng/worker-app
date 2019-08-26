import React from 'react';
import styled from 'styled-components/native';

import { JobDetail, WorkingHourInterface } from '../type';
import { JobThumbnail } from '../shared/JobThumbnail';
import { NoJobThumbnail } from '../shared/NoJobThumbnail';

const Wrapper = styled.ScrollView`
  flex: 1;
  padding-vertical: 10;
  padding-horizontal: 10;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;

interface NewJobTabProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  currentWorkingHour: Array<WorkingHourInterface>;
  navigation: { navigate: Function }
}

const NewJobTab = (props: NewJobTabProps) => {
  const { jobData, currentWorkingHour } = props;
  // const isEmptyJob = jobData.length === 0;
  const isEmptyJob = true;
  const displayJobThumnail = (data: Array<JobDetail>) => {
    return data.map((value: JobDetail, index: number) => (
      <JobThumbnail isButtonAppear key={index} jobData={value} />
    ));
  };

  return (
    <Wrapper>
      {!isEmptyJob ? displayJobThumnail(jobData) : <NoJobThumbnail hourWorkingData={currentWorkingHour} {...props} />}
    </Wrapper>
  );
};

export default NewJobTab;
