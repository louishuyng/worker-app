
import React from 'react';
import styled, { css } from 'styled-components/native';
import { NavigationScreenProp } from 'react-navigation';

import { convertWidth, convertHeight } from 'utils/convertSize';
import { SelectedAgendaProps, LabelBackgroundCalendar } from './type';
import { getString } from 'locales';
import { IC_ARROW_RIGHT } from 'utils/Icons';
import { RouteName } from 'constant';
import { JobDetail } from 'components/JobList/type';

interface Props {
  hour: number,
  hourText: string,
  selected: SelectedAgendaProps,
  navigation: NavigationScreenProp<any>;
  data: JobDetail;
  routeParam: any;
}

interface State {}

const Wrapper = styled.View`
  height: ${convertHeight(32)};
`;

const WrapperBackgroundJob = styled.View`
  width: 80%;
  position: absolute;
  left: ${convertWidth(20)}%;
  border-top-width: ${convertHeight(1)};
  border-top-color: ${({ theme }) => theme.colors.paleGray};
`;

const HourText = styled.Text`
  color: ${({ theme }) => theme.colors.paleSky};
  font-size: ${convertWidth(13)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  position: absolute;
  top: -${convertHeight(6)};
  left: ${convertWidth(25)};
`;

const BackgroundJob = styled.View<{isSelected: boolean}>`
  position: absolute;
  width: 100%;
  left: ${convertWidth(3)};
  height: ${convertHeight(32)};
  opacity: 0.1;
  ${({ isSelected, theme }) => {
    if (isSelected) {
      return css`
        background: ${theme.colors.cerulean};
    `;
    }
  }}
`;

const SelectedLine = styled.View`
  position: absolute;
  left: ${convertWidth(21)}%;
  width: ${convertWidth(2)};
  height: ${convertHeight(32)};
  background: ${({ theme }) => theme.colors.cerulean};
`;

const WrapperDescription = styled.View`
  position: absolute;
  left: ${convertWidth(25)}%;
  height: ${convertHeight(32)};
  justify-content: center;
`;
const Description = styled.Text<{fontSize: any, color: any}>`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  ${({ fontSize, color }) => css`
    font-size: ${convertWidth(fontSize)};
    color: ${color};
  `};
`;

const WrapperNavigation = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: ${convertWidth(25)}%;
  height: ${convertHeight(32)};
`;

const NavigationText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.cerulean};
  font-size: ${convertHeight(14)};
`;

const NavigationIcon = styled.Image``;

export default class AgendaItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      hourText,
      selected: { isSelected, marked, text, fontText, colorText },
      navigation,
      data,
      routeParam,
    } = this.props;
    return (
      <Wrapper>
        <HourText>{hourText}</HourText>
        <WrapperBackgroundJob>
          <BackgroundJob isSelected={isSelected}/>
        </WrapperBackgroundJob>
        {
          marked === LabelBackgroundCalendar.TITLE && (
            <WrapperDescription>
              <Description fontSize={fontText} color={colorText}>{text}</Description>
            </WrapperDescription>
          )
        }
        {
          marked === LabelBackgroundCalendar.LOCATION && (
            <WrapperDescription>
              <Description fontSize={fontText} color={colorText}>{text}</Description>
            </WrapperDescription>
          )
        }
        {
          marked === LabelBackgroundCalendar.NAVIGATION && (
            <WrapperNavigation onPress={() => {
              navigation.navigate(RouteName.JOB, {
                data,
                routeBack: RouteName.AGENDA,
                param: routeParam,
              });
            }} >
              <NavigationText>{getString('calendar', 'goJobPage')}</NavigationText>
              <NavigationIcon source={IC_ARROW_RIGHT}/>
            </WrapperNavigation>
          )
        }
        {isSelected && <SelectedLine />}
      </Wrapper>
    );
  }
}
