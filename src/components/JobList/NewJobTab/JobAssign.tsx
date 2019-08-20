import React from 'react';
import styled from 'styled-components/native';
import { Image, Text } from 'react-native';

import { ALERT_CIRCLE } from 'utils/Icons';
import { TimeFormat } from './models/NewJobTabConfig';

const Wrapper = styled.View`
  flex: 1;
  padding-top: 20;
  padding-bottom: 20;
  padding-right: 20;
  padding-left: 20;
`;

const Container = styled.View`
  padding-top: 3%;
  border-width: 1;
  border-color: #DBDEDE;
  border-radius: 7;
  align-items: center;
`;

const NotificationText = styled.Text`
  font-size: 16;
  padding: 3%;
`;

const Description = styled.Text`
  font-size: 16;
  padding: 3%;
  text-align: center;
`;

const FormatedTime = styled.Text`
  padding: 3%;
`;

const WrapperRecommed = styled.View`
  padding: 3%;
  flex-direction: row;
`;

const RecommendNavigate = styled.Text`
  font-size: 16;
  text-decoration: underline;
  text-decoration-color: #34A466;
  color: #34A466;
`;

const RecommendText = styled.Text`
  font-size: 16;
`;

interface JobAssignProps {
  data: null | TimeFormat
}

export const JobAssignComponent = ({ data }: JobAssignProps) => {
  let begin;
  let end;
  data && ({ begin, end } = data);
  return (
    <Wrapper>
      <Container>
        <Image source={ALERT_CIRCLE} />
        <NotificationText>No jobs assigned</NotificationText>
        {data !== null
          ? <Description>You are set as available for worbetween
            <FormatedTime> {begin}</FormatedTime> and
            <FormatedTime> {end}</FormatedTime> today
          </Description> : <Text></Text>}
        <WrapperRecommed>
          <RecommendNavigate>Tap here</RecommendNavigate>
          <RecommendText>
            {data !== null ? ' to cancel or change availability' : ' to set available for work hours'}
          </RecommendText>
        </WrapperRecommed>
      </Container>
    </Wrapper>
  );
};
