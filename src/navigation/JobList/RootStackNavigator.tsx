import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
  TabBarIconProps,
} from 'react-navigation';

import JobList from 'components/JobList';
import { RouteName } from 'constant';
import { IC_JOBLIST_ACTIVE, IC_JOBLIST_UN_ACTIVE } from 'utils/Icons';
import { BottomBarIconUI } from 'components/common';

const routeConfig: NavigationRouteConfig = {
  [RouteName.JOB_LIST]: {
    screen: JobList,
    navigationOptions: ({ navigation, screenProps }
      : { navigation: any, screenProps: any }) => {
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

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: RouteName.JOB_LIST,
  mode: 'card',
  headerMode: 'screen',
  navigationOptions: ({ navigation, screenProps }: {
    navigation: any, screenProps: any
  }) => {
    return {
      tabBarIcon: ({ focused }: TabBarIconProps) => {
        if (focused) return BottomBarIconUI({ source: IC_JOBLIST_ACTIVE });
        return BottomBarIconUI({ source: IC_JOBLIST_UN_ACTIVE });
      },
    };
  },
};

export default createStackNavigator(routeConfig, navigatorConfig);
