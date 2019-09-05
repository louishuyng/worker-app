import React from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';
import moment from 'moment';

import LocaleConfig from '../config';
import { convertWidth } from 'utils/convertSize';
import HeaderCalendar from '../shared';
import { colors, fontFamily } from 'utils/Theme';
import { RouteName } from 'constant';
import BackButtonUI from 'components/common/ButtonBack';
import CustomPickDate from '../PickDate';
import CustomCalendarList from './CustomCalendarList';

LocaleConfig.defaultLocale = 'en';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {
  isShowModalYear: boolean;
}

const SafeAreaView = styled.SafeAreaView` `;

export default class CalendarListComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowModalYear: false,
    };
  }

  componentDidMount() {
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
    const selectedYear = this.props.navigation.getParam('selectedYear') || moment().year();
    const selectedDate = this.props.navigation.getParam('datePicked') || moment().format('YYYY-MM-DD');
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
        <CustomCalendarList
          selectedYear={selectedYear}
          navigation={this.props.navigation}
          CustomSelectedDate={selectedDate}
        />
      </SafeAreaView>
    );
  }
}
