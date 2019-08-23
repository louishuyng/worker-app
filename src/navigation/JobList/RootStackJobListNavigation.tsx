import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import JobList from 'components/JobList';
import { RouteName } from 'constant';
import { IC_JOBLIST_ACTIVE, IC_JOBLIST_UN_ACTIVE } from 'utils/Icons';
import { withDefaultStackNavigationConfig } from 'navigation/shared';

const routeConfig: NavigationRouteConfig = {
  [RouteName.JOB_LIST]: {
    screen: JobList,
  },
};
const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  initialRouteName: RouteName.JOB_LIST,
  activeIcon: IC_JOBLIST_ACTIVE,
  unActiveIcon: IC_JOBLIST_UN_ACTIVE,
});

export default createStackNavigator(routeConfig, navigatorConfig);
