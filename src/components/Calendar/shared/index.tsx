import React from 'react';
import styled from 'styled-components/native';

import { convertHeight, convertWidth } from 'utils/convertSize';
import { weekDayShortNames } from '../config';
import { SafeAreaView } from 'react-native';

interface Props {
  isShowController?: boolean;
}

interface State {}

const WrapperHeaderWeek = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
  padding-horizontal: ${convertWidth(15)};
  height: ${convertHeight(39)};
  align-items: center;
`;

const TextDayHeader = styled.Text`
  text-align: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.paleSky};
  font-size: ${convertWidth(16)};
`;

export default class HeaderCalendar extends React.Component<Props, State> {
  render() {
    return (
      <WrapperHeaderWeek>
        {weekDayShortNames.map((day, id) => (
          <TextDayHeader
            allowFontScaling={false}
            accessible={false}
            numberOfLines={1}
            key={id}
            importantForAccessibility='no'
          >
            {day}
          </TextDayHeader>
        ))}
      </WrapperHeaderWeek>
    );
  }
}
