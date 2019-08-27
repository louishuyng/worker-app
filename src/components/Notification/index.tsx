import React, { Component } from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import { mockData } from './mock';
import { IC_JOB_ASSIGN, IC_JOB_CANCELLED } from 'utils/Icons';
import { convertHeight, convertWidth } from 'utils/convertSize';
import { View } from 'react-native';
import { Notification, TypeNotifcation } from './type';
import { getString } from 'locales';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;

const WrapperCard = styled.TouchableOpacity`
  min-height: ${convertHeight(90)};
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
`;

const WrapperDetail = styled.View`
  width: 100%;
  flex-direction: row;
`;

const WrapperNotification = styled.View`
  padding-horizontal: 5%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const WrapperContent = styled.View`
  margin-left: 6%;
`;

const WrapperIcon = styled.Image``;

const HorizontalLine = styled.View`
  width: 90%;
  height: 1;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.iron};
`;

const TitileStyled = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${convertWidth(15)};
  color: ${({ theme }) => theme.colors.capeCod};
  margin-bottom: 2;
`;

const JobNameStyled = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(14)};
  color: ${({ theme }) => theme.colors.paleSky};
  margin-bottom: 2;
`;

const LocationStyled = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(14)};
  color: ${({ theme }) => theme.colors.paleSky};
  margin-bottom: 2;
`;

const TimingStyled = styled.Text`
  font-size: ${convertWidth(12)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.paleSky};
  position: absolute;
  right: 0%;
`;

const StatusLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(13)};
  color: ${({ theme }) => theme.colors.paleSky};
  padding-vertical: 2%;
  padding-horizontal: 3%;
  text-transform: uppercase;
`;

interface Props {}

interface State {}

export default class NotificationUI extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  renderNotification = (data: Notification[], isRead: boolean) => {
    return data.filter((item) => item.isRead === isRead).map((item, i) => {
      const { title, jobName, location, type, timestamp } = item;
      const icon = type === TypeNotifcation.JOB_ASSIGN ? IC_JOB_ASSIGN : IC_JOB_CANCELLED;
      const timeFormat = moment().startOf('hours').fromNow();
      return (
        <View key={i}>
          <WrapperCard>
            <WrapperDetail>
              <WrapperIcon source={icon} />
              <WrapperContent>
                <TitileStyled>{title}</TitileStyled>
                <JobNameStyled>{jobName}</JobNameStyled>
                <LocationStyled>{location}</LocationStyled>
              </WrapperContent>
              <TimingStyled>{timeFormat}</TimingStyled>
            </WrapperDetail>
          </WrapperCard>
          {i % 2 === 0 && <HorizontalLine />}
        </View>
      );
    });
  };

  render() {
    return (
      <Container>
        <StatusLabel>{getString('notification', 'new')}</StatusLabel>
        <WrapperNotification>
          {this.renderNotification(mockData, false)}
        </WrapperNotification>
        <StatusLabel>{getString('notification', 'seen')}</StatusLabel>
        <WrapperNotification>
          {this.renderNotification(mockData, true)}
        </WrapperNotification>
      </Container>
    );
  };
};
