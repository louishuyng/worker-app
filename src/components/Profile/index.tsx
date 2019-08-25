import React, { Component } from 'react';
import styled from 'styled-components/native';

import { AVATAR, IC_ARROW } from 'utils/Icons';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { thisExpression } from '@babel/types';
import { RouteName } from 'constant';
import { getString } from 'locales';

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;

const WrapperInfo = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.iron};
  background-color: ${({ theme }) => theme.colors.white};
  align-self: center;
  width: ${convertWidth(343)};
  height: ${convertHeight(86)};
  padding-left: 3%;
  margin-top: 7;
  border-radius: 5;
`;

const WrapperAvatar = styled.View``;

const AvatarStyled = styled.Image`
  width: ${convertWidth(54)};
  height: ${convertWidth(54)};
  border-radius:${convertWidth(54 / 2)};
`;

const NameStyled = styled.Text`
  font-size: ${convertWidth(16)};
  padding-left: 3%;
  font-family: 'Roboto-Medium';
`;

const WrapperAvailabelCard = styled.TouchableOpacity<{ isWorkHourAppear: boolean }>`
  flex-direction: row;
  width: 100%;
  height: ${({ isWorkHourAppear }) => isWorkHourAppear ? convertHeight(71) : convertHeight(51)};
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 3%;
  align-items: center;
  justify-content: space-between;
`;

const WrapperAvailableWork = styled.View`
  padding-left: 5%;
  width: 80%;
`;

const WrapperArrow = styled.Image`
  margin-right: 5%;

`;

const AvailabelWorkTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${convertWidth(16)};
  color: ${({ theme }) => theme.colors.capeCod};
  padding-bottom: 0.5%;
`;

const DetailAvailabelWork = styled.Text`
  color: ${({ theme }) => theme.colors.paleSky};
  font-size: ${convertWidth(14)};
  font-family: 'Roboto-Regular';
  padding-top: 0.5%;
`;

const PersonalInfo = styled.Text`
  text-transform: uppercase;
  font-size: ${convertWidth(13)};
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.colors.paleSky};
  margin-top: 4%;
  margin-bottom: 2%;
  margin-left: 5%;
`;

const WrapperContact = styled.View`
  height: ${convertHeight(120)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 5%;
`;

const WrapperCard = styled.TouchableOpacity`
  height: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 5%;
`;

const ActionDetail = styled.Text`
  font-size: ${convertWidth(16)};
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.colors.capeCod};
`;

const HorizontalLine = styled.View`
  width: 95%;
  height: 1;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.iron}
`;

const SettingNavigation = styled.TouchableOpacity`
  width: 100%;
  height: ${convertHeight(51)};
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
`;

interface TimeFormat {
  hourBegin?: string;
  hourEnd?: string;
}
export interface Props {
  availableHours: TimeFormat[] | null;
  onHaveJob: boolean;
  navigation: {
    navigate: Function;
  }
}

export default class ProfileUI extends Component<Props, any> {
  render() {
    const { availableHours, onHaveJob } = this.props;
    const hourBegin = availableHours && availableHours[0].hourBegin;
    const hourEnd = availableHours && availableHours[0].hourEnd;
    const descriptionWorkHours = onHaveJob
      ? getString('profile', 'cannotChange')
      : availableHours
        ? `${getString('profile', 'from')} ${hourBegin} ${getString('profile', 'to')} ${hourEnd}`
        : '';
    return (
      <Container>
        <WrapperInfo>
          <WrapperAvatar>
            <AvatarStyled source={AVATAR} />
          </WrapperAvatar>
          <NameStyled>Friedrich Oberbrunner</NameStyled>
        </WrapperInfo>
        <WrapperAvailabelCard
          isWorkHourAppear={descriptionWorkHours !== ''}
          onPress={() => this.props.navigation.navigate(RouteName.WORK_HOURS)}
        >
          <WrapperAvailableWork>
            <AvailabelWorkTitle>{getString('profile', 'availabelTitle')}</AvailabelWorkTitle>
            {descriptionWorkHours !== '' &&
              <DetailAvailabelWork>{descriptionWorkHours}</DetailAvailabelWork>
            }
          </WrapperAvailableWork>
          <WrapperArrow source={IC_ARROW} />
        </WrapperAvailabelCard>
        <PersonalInfo>{getString('profile', 'personalInfo')}</PersonalInfo>
        <WrapperContact>
          <WrapperCard>
            <ActionDetail>{getString('profile', 'email')}</ActionDetail>
            <WrapperArrow source={IC_ARROW} />
          </WrapperCard>
          <HorizontalLine />
          <WrapperCard>
            <ActionDetail>{getString('profile', 'phone')}</ActionDetail>
            <WrapperArrow source={IC_ARROW} />
          </WrapperCard>
        </WrapperContact>
        <SettingNavigation onPress={() => null}>
          <ActionDetail>{getString('profile', 'settings')}</ActionDetail>
          <WrapperArrow source={IC_ARROW} />
        </SettingNavigation>
      </Container>
    );
  }
};
