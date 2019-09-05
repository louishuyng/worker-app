import React from 'react';
import { CalendarList, DayComponentProps } from 'react-native-calendars';
import moment from 'moment';
import { NavigationScreenProp } from 'react-navigation';

import DayComponent from './DayComponent';
import { colors } from 'utils/Theme';
import { convertWidth } from 'utils/convertSize';

interface Props {
  selectedYear: any;
  CustomSelectedDate: any;
  navigation: NavigationScreenProp<any>;
}

interface State {}

export default class CustomCalendarList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.CustomSelectedDate !== this.props.CustomSelectedDate) this.forceUpdate();
  }

  render() {
    const currentDate: string = moment().format('YYYY-MM-DD');
    const { selectedYear, CustomSelectedDate, navigation } = this.props;
    return (
      <CalendarList
        hideDayNames={true}
        firstDay={1}
        current={`${CustomSelectedDate}`}
        selected={currentDate}
        monthFormat={'MMMM, yyyy'}
        disabledByDefault={true}
        markedDates={
          {
            [currentDate]: {
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
              selectedYear, currentDate, date, state, marking, navigation,
            }} />
          );
        }}
      />
    );
  }
}
