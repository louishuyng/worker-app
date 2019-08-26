
import React from 'react';
import styled, { css } from 'styled-components/native';

import { convertWidth, convertHeight } from 'utils/convertSize';
import { SelectedAgendaProps, LabelBackgroundCalendar } from './type';
import { getString } from 'locales';
import { IC_ARROW_RIGHT } from 'utils/Icons';

interface Props {
  hour: number,
  hourText: string,
  selected: SelectedAgendaProps,
}

interface State {}

const Wrapper = styled.View`
  height: ${convertHeight(32)};
`;

const WrapperBackgroundJob = styled.View`
  width: ${convertWidth(313)};
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
  width: ${convertWidth(310)};
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

const MiddleText = styled.Text<{fontSize: any, color: any}>`
  position: absolute;
  left: ${convertWidth(25)}%;
  top: ${convertHeight(10)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  ${({ fontSize, color }) => css`
    font-size: ${convertWidth(fontSize)};
    color: ${color};
  `};
`;

const BottomText = styled.Text<{fontSize: any, color: any}>`
  position: absolute;
  left: ${convertWidth(25)}%;
  top: ${convertHeight(15)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  ${({ fontSize, color }) => css`
    font-size: ${convertWidth(fontSize)};
    color: ${color};
  `};
`;

const WrapperNavigation = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  align-items: center;
  left: ${convertWidth(25)}%;
  top: ${convertHeight(15)};
`;

const NavigationText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.cerulean};
  font-size: ${convertWidth(14)};
`;

const NavigationIcon = styled.Image``;

export default class AgendaItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { hourText, selected: { isSelected, marked, text, fontText, colorText } } = this.props;
    return (
      <Wrapper>
        <HourText>{hourText}</HourText>
        <WrapperBackgroundJob>
          <BackgroundJob isSelected={isSelected}/>
        </WrapperBackgroundJob>
        {
          marked === LabelBackgroundCalendar.TITLE &&
            <BottomText fontSize={fontText} color={colorText}>{text}</BottomText>
        }
        {
          marked === LabelBackgroundCalendar.LOCATION &&
            <MiddleText fontSize={fontText} color={colorText}>{text}</MiddleText>
        }
        {
          marked === LabelBackgroundCalendar.NAVIGATION && (
            <WrapperNavigation>
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
