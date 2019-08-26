import React from 'react';
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';
import { IC_USER_ACTIVE, IC_USER_UN_ACTIVE } from 'utils/Icons';
import { ProfileScreen } from 'screens/Profile';
import { convertWidth } from 'utils/convertSize';
import { WorkHoursScreen } from 'screens/WorkHours';
import BackButtonUI from 'components/common/ButtonBack';

const routeConfig: NavigationRouteConfig = {
  [RouteName.PROFILE]: {
    screen: ProfileScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ navigation, screenProps }),
  },
  [RouteName.WORK_HOURS]: {
    screen: WorkHoursScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      navigation,
      screenProps,
      headLeftComponent: <BackButtonUI onPress={() => navigation.pop()}/>,
      widthTitle: '75%',
    }),
  },
};

const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  activeIcon: IC_USER_ACTIVE,
  unActiveIcon: IC_USER_UN_ACTIVE,
  initialRouteName: RouteName.PROFILE,
});

export default createStackNavigator(routeConfig, navigatorConfig);
