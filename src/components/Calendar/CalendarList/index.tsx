import React from 'react';
import styled from 'styled-components/native';
import { CalendarList, DayComponentProps } from 'react-native-calendars';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';
import moment from 'moment';

import LocaleConfig from '../config';
import DayComponent from 'components/Calendar/CalendarList/DayComponent';
import { convertWidth } from 'utils/convertSize';
import HeaderCalendar from '../shared';
import { colors, fontFamily } from 'utils/Theme';
import { RouteName } from 'constant';
import BackButtonUI from 'components/common/ButtonBack';
import CustomPickDate from '../PickDate';

LocaleConfig.defaultLocale = 'en';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {
  isShowModalYear: boolean;
  selectedDate: any;
}

const SafeAreaView = styled.SafeAreaView` `;

export default class CalendarListComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowModalYear: false,
      selectedDate: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      selectedDate: this.props.navigation.getParam('datePicked') || moment().format('YYYY-MM-DD'),
    });
    this.props.navigation.setParams({ onPress: () => this.setState({
      isShowModalYear: true,
    }),
    });
  }

  static navigationOptions = (
    { navigation }: {
      navigation: NavigationScreenProp<any>
    }): NavigationStackScreenOptions => {
    const selectedYear = navigation.getParam('selectedYear');
    return {
      title: RouteName.CALENDAR,
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTitleStyle: {
        color: colors.black,
        fontSize: convertWidth(17),
        width: '75%',
        textAlign: 'center',
        fontFamily: fontFamily.medium,
      },
      headerLeft: <BackButtonUI
        label={selectedYear || moment().year() as number}
        navigation={navigation}
      />,
      headerTintColor: colors.mineShaft,
    };
  }

  render() {
    const currentDate: string = moment().format('YYYY-MM-DD');
    const selectedYear = this.props.navigation.getParam('selectedYear') || moment().year();
    return (
      <SafeAreaView>
        <HeaderCalendar isShowController={false} datePicked={'1970-01-01T00:00:00.140Z'} />
        <CustomPickDate
          navigation={this.props.navigation}
          selectedValue={selectedYear}
          title={'Select year'}
          isYearData
          minYear={moment().year() - 50}
          maxYear={moment().year() + 50}
          isVisible={this.state.isShowModalYear}
          onCancel={() => this.setState({ isShowModalYear: false })}
        />
        {this.state.selectedDate && (
          <CalendarList
            key={this.state.selectedDate}
            hideDayNames={true}
            firstDay={1}
            current={`${this.state.selectedDate}`}
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
                  selectedYear, currentDate, date, state, marking, navigation: this.props.navigation,
                }} />
              );
            }}
          />
        )}
      </SafeAreaView>
    );
  }
}
