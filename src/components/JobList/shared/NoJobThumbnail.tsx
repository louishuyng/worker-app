import React from 'react';
import styled from 'styled-components/native';
import { Image, Text } from 'react-native';

import { ALERT_CIRCLE } from 'utils/Icons';
import { TimeFormat } from '../type';
import { getString } from 'locales';

const Wrapper = styled.View`
  flex: 1;
  padding: 3%;
`;

const Container = styled.View`
  padding-top: 3%;
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.iron};
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
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.chateauGreen};
  color: ${({ theme }) => theme.colors.chateauGreen};
`;

const RecommendText = styled.Text`
`;

interface JobAssignProps {
  hourWorkingData: [] | Array<TimeFormat>;
}

export const NoJobThumbnail = ({ hourWorkingData }: JobAssignProps) => {
  const dataLength = hourWorkingData.length;
  const isEmpty = dataLength === 0;
  const begin = !isEmpty && hourWorkingData[0].begin;
  const end = !isEmpty && hourWorkingData[dataLength - 1].end;

  return (
    <Wrapper>
      <Container>
        <Image source={ALERT_CIRCLE} />
        <NotificationText>{getString('jobList', 'noJobTitle')}</NotificationText>
        {!isEmpty
          ? <Description>{getString('jobList', 'noJobSubTitle')}
            <FormatedTime>{begin}</FormatedTime>{getString('jobList', 'and')}
            <FormatedTime>{end}</FormatedTime>{getString('jobList', 'today')}
          </Description> : null}
        <WrapperRecommed>
          <RecommendNavigate>{getString('jobList', 'tapLabel')}</RecommendNavigate>
          <RecommendText>
            {
              isEmpty !== null
                ? getString('jobList', 'suggestionOne')
                : getString('jobList', 'suggestionTwo')
            }
          </RecommendText>
        </WrapperRecommed>
      </Container>
    </Wrapper>
  );
};
