import React from 'react';
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import JobList from 'components/JobList';
import { RouteName } from 'constant';
import { IC_JOBLIST_ACTIVE, IC_JOBLIST_UN_ACTIVE } from 'utils/Icons';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';
import JobDetail from 'components/JobDetail';
import { colors } from 'utils/Theme';
import BackButtonUI from 'components/common/ButtonBack';
import { TimeSheetScreen } from 'screens/TimeSheet';

const routeConfig: NavigationRouteConfig = {
  [RouteName.JOB_LIST]: {
    screen: JobList,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ screenProps, navigation }),
  },
  [RouteName.JOB]: {
    screen: JobDetail,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      headLeftComponent: <BackButtonUI onPress={() => navigation.pop()}/>,
      widthTitle: '75%',
    }),
  },
  [RouteName.TIMESHEET]: {
    screen: TimeSheetScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      headLeftComponent: <BackButtonUI onPress={() => navigation.pop()}/>,
      widthTitle: '75%',
    }),
  },
};
const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  initialRouteName: RouteName.JOB_LIST,
  activeIcon: IC_JOBLIST_ACTIVE,
  unActiveIcon: IC_JOBLIST_UN_ACTIVE,
});

export default createStackNavigator(routeConfig, navigatorConfig);
