import React from 'react';
import styled from 'styled-components/native';

import { MAP_MARKER } from 'utils/Icons';
import { screenHeight } from 'utils/Styles';
import { JobCancelledProps } from './createModal';
const Wrapper = styled.View``;

const Container = styled.View`
  padding: 6%;
`;

const JobNameTitle = styled.Text`
  color: ${({ theme }) => theme.colors.capeCod}
  font-weight: 500;
`;

const WrapperLocation = styled.View`
  flex-direction: row;
  padding-vertical: 3%;
`;

const Location = styled.Text`
  padding-left: 3%;
  color: ${({ theme }) => theme.colors.capeCod}
`;

const WrapperReason = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.aquaHaze}
  padding: 5%;
  max-height: ${screenHeight / 3};
s`;

const ReasonContent = styled.Text`
  color: ${({ theme }) => theme.colors.capeCod}
`;

const WrapperIcon = styled.Image``;

const CancelledJob = (props: JobCancelledProps) => {
  const { jobName, location, reason } = props;
  return (
    <Wrapper>
      <Container>
        <JobNameTitle>{jobName}</JobNameTitle>
        <WrapperLocation>
          <WrapperIcon source={MAP_MARKER} />
          <Location>{location}</Location>
        </WrapperLocation>
      </Container>
      <WrapperReason showsVerticalScrollIndicator={false}>
        <ReasonContent>{reason}</ReasonContent>
      </WrapperReason>
    </Wrapper>
  );
};

export default CancelledJob;
