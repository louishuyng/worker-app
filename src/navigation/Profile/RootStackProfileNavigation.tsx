
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig } from 'navigation/shared';
import { IC_USER_ACTIVE, IC_USER_UN_ACTIVE } from 'utils/Icons';
import { WorkHoursScreen } from 'screens/WorkHours';

const routeConfig: NavigationRouteConfig = {
  [RouteName.WORK_HOURS]: {
    screen: WorkHoursScreen,
  },
};

const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  activeIcon: IC_USER_ACTIVE,
  unActiveIcon: IC_USER_UN_ACTIVE,
  initialRouteName: RouteName.WORK_HOURS,
});

export default createStackNavigator(routeConfig, navigatorConfig);
