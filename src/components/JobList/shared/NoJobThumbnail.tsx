import React from 'react';
import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';

import { ALERT_CIRCLE } from 'utils/Icons';
import { getString } from 'locales';
import { convertWidth } from 'utils/convertSize';
import { TimeFormat } from 'components/workHours/type';
import { RouteName } from 'constant';

const Wrapper = styled.View`
  flex: 1;
`;

const Container = styled.View`
  padding-vertical: 6%;
  border-width: 1;
  border-color: ${({ theme }) => theme.colors.iron};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7;
  align-items: center;
`;

const NotificationText = styled.Text`
  font-size: ${convertWidth(16)};
  padding: 3%;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const Description = styled.Text`
  font-size: ${convertWidth(16)};
  color: ${({ theme }) => theme.colors.capeCod};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const FormatedTime = styled.Text`
  padding: 3%;
  font-size: ${convertWidth(16)};
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

const WrapperRecommed = styled.View`
  padding: 3%;
  flex-direction: row;
  align-items: center;
`;

const RecommendNavigate = styled.Text`
  font-size: ${convertWidth(16)};
  text-decoration: underline;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  text-decoration-color: ${({ theme }) => theme.colors.chateauGreen};
  color: ${({ theme }) => theme.colors.chateauGreen};
`;

const RecommendText = styled.Text`
  font-size: ${convertWidth(16)};
  color:  ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

interface JobAssignProps {
  hourWorkingData: [] | Array<TimeFormat>;
  navigation: { navigate: Function }
}

export const NoJobThumbnail = ({ hourWorkingData, navigation }: JobAssignProps) => {
  const dataLength = hourWorkingData.length;
  const isEmpty = dataLength === 0;
  const beginHour = !isEmpty && hourWorkingData[0].begin.hour;
  const beginMinute = !isEmpty && hourWorkingData[0].begin.minute;
  const endHour = !isEmpty && hourWorkingData[dataLength - 1].end.hour;
  const endMinute = !isEmpty && hourWorkingData[dataLength - 1].end.minute;

  return (
    <Wrapper>
      <Container>
        <Image source={ALERT_CIRCLE} />
        <NotificationText>{getString('jobList', 'noJobTitle')}</NotificationText>
        {!isEmpty
          ? (
            <>
              <Description>{getString('jobList', 'noJobSubTitle')}</Description>
              <Description>
                {getString('jobList', 'between')}
                <FormatedTime>{beginHour}:{beginMinute}0</FormatedTime>{getString('jobList', 'and')}
                <FormatedTime>{endHour}:{endMinute}0</FormatedTime>{getString('jobList', 'today')}
              </Description>
            </>
          ) : null
        }
        <WrapperRecommed>
          <TouchableOpacity onPress={
            () => (navigation).navigate(RouteName.WORK_HOURS_JOB_LIST)
          }>
            <RecommendNavigate>
              {getString('jobList', 'tapLabel')}
            </RecommendNavigate>
          </TouchableOpacity>
          <RecommendText>
            {
              isEmpty === true
                ? getString('jobList', 'suggestionTwo')
                : getString('jobList', 'suggestionOne')
            }
          </RecommendText>
        </WrapperRecommed>
      </Container>
    </Wrapper>
  );
};
