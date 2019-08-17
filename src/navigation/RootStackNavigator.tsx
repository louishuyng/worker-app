import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import { SignInComponent } from 'components/Auth';

const routeConfig: NavigationRouteConfig = {
  Demo: {
    screen: SignInComponent,
    navigationOptions: ({ navigation, screenProps }
      : { navigation: any, screenProps: any }) => {
      const { theme } = screenProps;
      return ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      });
    },
    path: 'demo',
  },
};

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: 'Demo',
  mode: 'card',
  headerMode: 'screen',
};

export default createStackNavigator(routeConfig, navigatorConfig);
