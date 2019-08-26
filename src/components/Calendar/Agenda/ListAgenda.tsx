import React from 'react';
import styled from 'styled-components/native';

import { listNumberHour } from 'constant';
import AgendaItem from './AgendaItem';
import { convertHeight } from 'utils/convertSize';
import { processTimeData } from '../config';
import { LabelBackgroundCalendar } from './type';
import { colorsType } from 'utils/Theme';

interface Props {}

interface State {}

const WrapperView = styled.ScrollView`
`;

const ExtendBox = styled.View`
  height: ${convertHeight(30)};
`;

export default class ListAgenda extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  renderList = () => {
    const timeData: {[index: string]: any} = {};
    processTimeData(timeData);

    return listNumberHour.map((value) => {
      const { hour, string } = value;
      const marked = timeData[hour] && timeData[hour] as LabelBackgroundCalendar;
      const text = timeData[`${hour}Text`] && timeData[`${hour}Text`] as string;
      const colorText = timeData[`${hour}Color`] && timeData[`${hour}Color`] as colorsType;
      const fontText = timeData[`${hour}Font`] && timeData[`${hour}Font`];
      const isSelected = timeData[`${hour}Selected`] && timeData[`${hour}Selected`];

      return (
        <AgendaItem
          key={hour}
          hour={hour}
          hourText={string}
          selected={
            {
              isSelected,
              marked,
              text,
              colorText,
              fontText,
            }
          }
        />
      );
    });
  }

  render() {
    return (
      <WrapperView>
        <ExtendBox />
        {this.renderList()}
      </WrapperView>
    );
  }
}
