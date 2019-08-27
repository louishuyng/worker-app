import React from 'react';
import styled from 'styled-components/native';

<<<<<<< Updated upstream
import { JobDetail, WorkingHourInterface } from '../type';
import { JobThumbnail } from '../shared/JobThumbnail';
import { NoJobThumbnail } from '../shared/NoJobThumbnail';

const Wrapper = styled.ScrollView`
  flex: 1;
  padding-vertical: 10;
  padding-horizontal: 10;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;
=======
import { JobDetail, ProgressStatus } from '../type';
import { JobThumbnail, NoJobThumbnail, WrapperJobList } from '../shared';
import { TimeWorkHourFormat } from 'components/workHours/type';
import { convertHeight, convertWidth } from 'utils/convertSize';
>>>>>>> Stashed changes

interface NewJobTabProps {
  tabLabel: string;
  jobData: Array<JobDetail>;
  currentWorkingHour: Array<TimeWorkHourFormat>;
  navigation: { navigate: Function }
}

const NewJobTab = (props: NewJobTabProps) => {
  const { jobData, currentWorkingHour } = props;
  // const isEmptyJob = jobData.length === 0;
  const isEmptyJob = true;
  const displayJobThumnail = (data: Array<JobDetail>) => {
    return data.map((value: JobDetail, index: number) => (
      <JobThumbnail
        isButtonAppear key={index}
        jobData={value}
        progressStatus={ProgressStatus.NEWJOB}
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
