import React from 'react';
import styled from 'styled-components/native';
import { CalendarList, DayComponentProps } from 'react-native-calendars';
import { NavigationScreenProp } from 'react-navigation';

import LocaleConfig from '../config';
import DayComponent from 'components/Calendar/CalendarList/DayComponent';
import { convertHeight, convertWidth } from 'utils/convertSize';
import HeaderCalendar from '../shared';
import { colors } from 'utils/Theme';

LocaleConfig.defaultLocale = 'en';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {}

const SafeAreaView = styled.SafeAreaView`
`;

export default class CalendarListComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const currentDate: string = '2019-08-26';
    return (
      <SafeAreaView>
        <HeaderCalendar />
        <CalendarList
          hideDayNames={true}
          firstDay={1}
          monthFormat={'MMMM'}
          markedDates={
            {
              '2019-08-26': {
                selected: true,
                marked: true,
                selectedColor: 'blue',
                dots: ['1', '2'],
              },
            }
          }
          theme={{
            'stylesheet.calendar-list.main': {
              calendar: {
                height: convertHeight(280),
              },
            },
            'stylesheet.calendar.header': {
              header: {
              },
              monthText: {
                color: colors.paleSky,
                fontSize: convertWidth(17),
              },
            },
            'stylesheet.calendar.main': {
              week: {
                flexDirection: 'row',
              },
            },
          }}
          dayComponent={({ marking, date, state }: DayComponentProps) => {
            return (
              <DayComponent {...{
                currentDate, date, state, marking, navigation: this.props.navigation,
              }} />
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
