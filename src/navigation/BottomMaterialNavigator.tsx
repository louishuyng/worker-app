import {
  createMaterialBottomTabNavigator, TabConfig,
} from 'react-navigation-material-bottom-tabs';
import { NavigationRouteConfigMap, TabBarIconProps } from 'react-navigation';

import { colors } from 'utils/Theme';
import { screenHeight } from 'utils/Styles';
import bottomBarRouteLists from './models/bottomBarRoutes';

const createRouteConfig = (): NavigationRouteConfigMap => {
  let routes: NavigationRouteConfigMap = {};

  bottomBarRouteLists.map((value) => {
    const { key, screen, title, activeIcon, unaActiveIcon } = value;
    routes = {
      ...routes,
      [key]: {
        screen,
        navigationOptions: {
          title,
          tabBarIcon: ({ focused }: TabBarIconProps) => {
            return focused ? activeIcon : unaActiveIcon;
          },
        },
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
