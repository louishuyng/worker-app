import React, { lazy, Suspense } from 'react';
import styled from 'styled-components/native';
import {
  NavigationScreenProp,
  NavigationStackScreenOptions,
} from 'react-navigation';
import moment from 'moment';

import LocaleConfig from '../config';
import { convertWidth } from 'utils/convertSize';
import HeaderCalendar from '../shared';
import { colors, fontFamily } from 'utils/Theme';
import { RouteName } from 'constant';
import BackButtonUI from 'components/common/ButtonBack';
import CustomPickDate from '../PickDate';
import { LoadingSpine } from 'components/common';

const CustomCalendarList = lazy(() => import('./CustomCalendarList'));

LocaleConfig.defaultLocale = 'en';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {
  isShowModalYear: boolean;
  options: {[key: number]: any};
  isLoading: boolean;
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const LoadingSpineWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default class CalendarListComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowModalYear: false,
      options: {},
      isLoading: false,
    };
    this.props.navigation.setParams({ onPress: () => this.setState({
      isShowModalYear: true,
    }),
    });
  }

  componentDidMount() {
    const options: {[key: number]: any} = {};
    const currentYear = moment().year();
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
      options[i] = {
        name: i,
      };
    }
    this.setState({
      ...this.state,
      options,
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
        isHideButton
        label={selectedYear || moment().year() as number}
        navigation={navigation}
      />,
      headerTintColor: colors.mineShaft,
    };
  }

  render() {
    const handleOnCancel = (callback: any = undefined, isLoading = false) => {
      if (callback) {
        setTimeout(() => {
          callback();
          this.setState({
            isLoading: false,
          });
        }, 1000);
      }
      this.setState({
        isShowModalYear: false,
        isLoading,
      });
    };
    const selectedYear = this.props.navigation.getParam('selectedYear') || moment().year();
    const selectedDate = this.props.navigation.getParam('datePicked') || moment().format('YYYY-MM-DD');

    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <LoadingSpineWrapper >
            <LoadingSpine />
          </LoadingSpineWrapper>
        ) : (
          <SafeAreaView>
            <HeaderCalendar isShowController={false} datePicked={'1970-01-01T00:00:00.140Z'} />
            <CustomPickDate
              key={selectedYear}
              navigation={this.props.navigation}
              selectedValue={selectedYear}
              title={'Select year'}
              isYearData
              isVisible={this.state.isShowModalYear}
              onCancel={(callback: any, isLoading: boolean) => handleOnCancel(callback, isLoading)}
              options={this.state.options}
            />
            <Suspense fallback={
              <LoadingSpineWrapper>
                <LoadingSpine />
              </LoadingSpineWrapper>}
            >
              <CustomCalendarList
                selectedYear={selectedYear}
                navigation={this.props.navigation}
                CustomSelectedDate={selectedDate}
              />
            </Suspense>
          </SafeAreaView>
        ) }
      </React.Fragment>
    );
  }
}
