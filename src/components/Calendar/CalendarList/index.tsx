import React from 'react';
import styled from 'styled-components/native';
import { CalendarList, DayComponentProps } from 'react-native-calendars';
import { NavigationScreenProp } from 'react-navigation';

import LocaleConfig from '../config';
import DayComponent from 'components/Calendar/CalendarList/DayComponent';
import { convertWidth } from 'utils/convertSize';
import HeaderCalendar from '../shared';
import { colors } from 'utils/Theme';
import { screenHeight } from 'utils/Styles';

LocaleConfig.defaultLocale = 'en';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State { }

const SafeAreaView = styled.SafeAreaView` `;

export default class CalendarListComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const currentDate: string = this.props.navigation.getParam('datePicked') || '2019-08-26';
    return (
      <SafeAreaView>
        <HeaderCalendar isShowController={false} datePicked={'1970-01-01T00:00:00.140Z'} />
        <CalendarList
          hideDayNames={true}
          firstDay={1}
          current={currentDate}
          monthFormat={'MMMM, yyyy'}
          disabledByDefault={true}
          markedDates={
            {
              '2019-08-26': {
                selected: true,
                marked: true,
                selectedColor: 'blue',
                dots: [2, 2],
              },
            }
          }
          theme={{
            'stylesheet.calendar-list.main': {
              container: {
                backgroundColor: colors.aquaHaze,
              },
              calendar: {
                width: '100%',
              },
            },
            'stylesheet.calendar.header': {
              monthText: {
                color: colors.paleSky,
                fontSize: convertWidth(17),
              },
              currentMonthText: {
                color: colors.skyBlue,
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
