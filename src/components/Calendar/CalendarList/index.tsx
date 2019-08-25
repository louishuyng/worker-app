import React from 'react';
import styled from 'styled-components/native';
import { CalendarList, DayComponentProps } from 'react-native-calendars';
import { NavigationScreenProp } from 'react-navigation';
import moment from 'moment';

import LocaleConfig from '../config';
import DayComponent from 'components/Calendar/CalendarList/DayComponent';
import { convertHeight, convertWidth } from 'utils/convertSize';
import HeaderCalendar from '../shared';

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
    const currentDate: string = moment().format('YYYY-MM-DD');
    return (
      <SafeAreaView>
        <HeaderCalendar />
        <CalendarList
          hideDayNames={true}
          firstDay={1}
          markedDates={
            {
              '2019-08-25': {
                selected: true,
                marked: true,
                selectedColor: 'blue',
                dots: ['1', '2'],
              },
            }
          }
          calendarHeight={convertHeight(280)}
          theme={{
            'stylesheet.calendar.header': {
              header: {
                justifyContent: 'center',
                marginBottom: convertHeight(10),
              },
              monthText: {
                fontSize: convertWidth(17),
                alignContent: 'space-between',
              },
            },
            'stylesheet.calendar.main': {
              week: {
                marginBottom: convertHeight(15),
                flexDirection: 'row',
                justifyContent: 'space-around',
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
