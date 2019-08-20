import React from 'react';
import styled from 'styled-components/native';

import { AvailableJobComponent } from './AvailableJob';
import { JobAssignComponent } from './JobAssign';
import { NewJobTabModel } from 'components/JobList/NewJobTab/models/newJobModel';
import { NewJobTabStage } from 'components/JobList/NewJobTab/models/newJobTabConfig';

const Wrapper = styled.View<{ tabLabel: string }>`
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 10;
  padding-left: 10;
`;

interface TimeFormat {
  begin: string;
  end: string;
}

interface AvailableJob {
  time: TimeFormat;
  location: string;
  date: string;
}

interface NewJobTabProps {
  stage: NewJobTabStage;
  tabLabel: string;
}

const NewJobTab = (props: NewJobTabProps) => {
  const dataModel: any = NewJobTabModel(props.stage);
  return (
    <Wrapper tabLabel="New Job">
      {props.stage === NewJobTabStage.ON_HAVE_AVAILABLE_JOB
        ? (dataModel as []).map((item, i) => <AvailableJobComponent key={i} {...item} />)
        : <JobAssignComponent data={dataModel} />}
    </Wrapper>
  );
};

export default NewJobTab;
