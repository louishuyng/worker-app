import React from 'react';
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
  NavigationScreenProp,
} from 'react-navigation';

import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';
import { IC_NOTIFICATION_ACITVE, IC_NOTIFICATION_UN_ACITVE } from 'utils/Icons';
import NotificationUI from 'components/Notification';
import JobDetail from 'components/JobDetail';
import { colors } from 'utils/Theme';
import BackButtonUI from 'components/common/ButtonBack';
import { CreateTimeSheetScreen } from 'screens/TimeSheet';

const routeConfig: NavigationRouteConfig = {
  [RouteName.NOTIFICATION]: {
    screen: NotificationUI,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ navigation, screenProps }),
  },
  [RouteName.JOB_NOTIFICATION]: {
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
  [RouteName.CREATE_TIMESHEET]: {
    screen: CreateTimeSheetScreen,
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
};

const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  activeIcon: IC_NOTIFICATION_ACITVE,
  unActiveIcon: IC_NOTIFICATION_UN_ACITVE,
  initialRouteName: RouteName.NOTIFICATION,
});

export default createStackNavigator(routeConfig, navigatorConfig);
