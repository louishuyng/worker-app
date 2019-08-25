
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig } from 'navigation/shared';
import { IC_USER_ACTIVE, IC_USER_UN_ACTIVE } from 'utils/Icons';
import { WorkHoursScreen } from 'screens/WorkHours';
import { ProfileScreen } from 'screens/Profile';
import { convertWidth } from 'utils/convertSize';

const routeConfig: NavigationRouteConfig = {
  [RouteName.PROFILE]: {
    screen: ProfileScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => {
      const { theme } = screenProps;
      return ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          color: theme.fontColor,
          fontSize: convertWidth(17),
          fontFamily: 'Roboto-Medium',
        },
        headerTintColor: theme.tintColor,
      });
    },
  },
  [RouteName.WORK_HOURS]: {
    screen: WorkHoursScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => {
      const { theme } = screenProps;
      return ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          color: theme.fontColor,
          fontSize: convertWidth(17),
          fontFamily: 'Roboto-Medium',
        },
        headerTintColor: theme.tintColor,
      });
    },
  },
};

const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  activeIcon: IC_USER_ACTIVE,
  unActiveIcon: IC_USER_UN_ACTIVE,
  initialRouteName: RouteName.PROFILE,
});

export default createStackNavigator(routeConfig, navigatorConfig);
