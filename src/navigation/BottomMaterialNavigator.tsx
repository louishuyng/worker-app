import {
  createMaterialBottomTabNavigator, TabConfig,
} from 'react-navigation-material-bottom-tabs';
import { NavigationRouteConfigMap } from 'react-navigation';

import { colors } from 'utils/Theme';
import { screenHeight } from 'utils/Styles';
import bottomBarRouteLists from './models/bottomBarRoutes';

const createRouteConfig = (): NavigationRouteConfigMap => {
  let routes: NavigationRouteConfigMap = {};

  bottomBarRouteLists.map((value) => {
    const { key, screen } = value;
    routes = {
      ...routes,
      [key]: {
        screen,
      },
    };
  });
  return routes;
};

const routeConfigMap = createRouteConfig();

const navigatorConfig: TabConfig = {
  initialRouteName: 'JobList',
  labeled: false,
  barStyle: {
    backgroundColor: colors.lightBackground,
    height: screenHeight * 0.1,
  },
};

export default createMaterialBottomTabNavigator(
  routeConfigMap, navigatorConfig
);
