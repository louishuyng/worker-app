import React from 'react';
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';
import { IC_USER_ACTIVE, IC_USER_UN_ACTIVE, IC_NOTIFICATION_ACITVE, IC_NOTIFICATION_UN_ACITVE } from 'utils/Icons';
import { ProfileScreen } from 'screens/Profile';
import { convertWidth } from 'utils/convertSize';
import { WorkHoursScreen } from 'screens/WorkHours';
import BackButtonUI from 'components/common/ButtonBack';
import NotificationUI from 'components/Notification';

const routeConfig: NavigationRouteConfig = {
  [RouteName.NOTIFICATION]: {
    screen: NotificationUI,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ navigation, screenProps }),
  },
};

const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  activeIcon: IC_NOTIFICATION_ACITVE,
  unActiveIcon: IC_NOTIFICATION_UN_ACITVE,
  initialRouteName: RouteName.NOTIFICATION,
});

export default createStackNavigator(routeConfig, navigatorConfig);
