import React from 'react';
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
  NavigationScreenProp,
} from 'react-navigation';

import { CalendarList, Agenda } from 'components/Calendar';
import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';
import { IC_CALENDAR_ACTIVE, IC_CALENDAR_UN_ACTIVE } from 'utils/Icons';
import JobDetail from 'components/JobDetail';
import { colors } from 'utils/Theme';
import BackButtonUI from 'components/common/ButtonBack';
import DatePicker from 'components/Calendar/PickDate';

const routeConfig: NavigationRouteConfig = {
  [RouteName.CALENDAR]: {
    screen: CalendarList,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ screenProps, navigation }),
  },
  [RouteName.AGENDA]: {
    screen: Agenda,
  },
  [RouteName.JOB_CALENDAR]: {
    screen: JobDetail,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      headLeftComponent: <BackButtonUI navigation={navigation} />,
      widthTitle: '75%',
    }),
  },
  [RouteName.DATE_PICKER]: {
    screen: DatePicker,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      widthTitle: '75%',
    }),
  },
};
const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  initialRouteName: RouteName.CALENDAR,
  activeIcon: IC_CALENDAR_ACTIVE,
  unActiveIcon: IC_CALENDAR_UN_ACTIVE,
});

export default createStackNavigator(routeConfig, navigatorConfig);
