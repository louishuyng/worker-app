import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import Calendar from 'components/Calendar';
import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig } from 'navigation/shared';
import { IC_CALENDAR_ACTIVE, IC_CALENDAR_UN_ACTIVE } from 'utils/Icons';

const routeConfig: NavigationRouteConfig = {
  [RouteName.CALENDAR]: {
    screen: Calendar,
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
          fontSize: 17,
        },
        headerTintColor: theme.tintColor,
      });
    },
  },
};
const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  initialRouteName: RouteName.CALENDAR,
  activeIcon: IC_CALENDAR_ACTIVE,
  unActiveIcon: IC_CALENDAR_UN_ACTIVE,
});

export default createStackNavigator(routeConfig, navigatorConfig);
