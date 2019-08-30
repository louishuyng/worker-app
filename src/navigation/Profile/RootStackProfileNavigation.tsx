import React from 'react';
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
  NavigationScreenProp } from 'react-navigation';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';

import { RouteName } from 'constant';
import { IC_USER_ACTIVE, IC_USER_UN_ACTIVE } from 'utils/Icons';
import { ProfileScreen } from 'screens/Profile';
import { WorkHoursScreen } from 'screens/WorkHours';
import BackButtonUI from 'components/common/ButtonBack';
import { EmailPersonalScreen, PhonePersonalScreen } from 'screens/Personal';

const routeConfig: NavigationRouteConfig = {
  [RouteName.PROFILE]: {
    screen: ProfileScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ navigation, screenProps }),
  },
  [RouteName.WORK_HOURS]: {
    screen: WorkHoursScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      navigation,
      screenProps,
      headLeftComponent: <BackButtonUI navigation={navigation}/>,
      widthTitle: '75%',
    }),
  },
  [RouteName.EMAIL_PERSONAL]: {
    screen: EmailPersonalScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      navigation,
      screenProps,
      headLeftComponent: <BackButtonUI navigation={navigation}/>,
      widthTitle: '75%',
    }),
  },
  [RouteName.PHONE_PERSONAL]: {
    screen: PhonePersonalScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      navigation,
      screenProps,
      headLeftComponent: <BackButtonUI navigation={navigation}/>,
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
