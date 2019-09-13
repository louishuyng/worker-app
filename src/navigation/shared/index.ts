import {
  StackNavigatorConfig,
  TabBarIconProps,
  NavigationScreenProp,
  NavigationScreenConfig,
  NavigationActions,
} from 'react-navigation';

import { BottomBarIconUI } from 'components/common';
import { ImageSourcePropType } from 'react-native';
import { convertWidth } from 'utils/convertSize';
import { colorsType } from 'utils/Theme';
import { RouteName } from 'constant';

interface StackNavigationConfigInterface {
  initialRouteName: string;
  activeIcon: ImageSourcePropType;
  unActiveIcon: ImageSourcePropType;
}

export const wihtDefaultNavigtaionConfig = ({
  navigation,
  screenProps,
  headLeftComponent,
  headRightComponent,
  widthTitle,
  colorHeader,
  backgroundColor,
}: {
  navigation: NavigationScreenProp<any>;
  screenProps: any;
  headLeftComponent?: any;
  headRightComponent?: any;
  widthTitle?: any;
  colorHeader?: string;
  backgroundColor?: string;
}): NavigationScreenConfig<any> => {
  const { theme } = screenProps;
  return {
    title: navigation.state.routeName,
    headerStyle: {
      backgroundColor: colorHeader || theme.background,
    },
    headerTitleStyle: {
      color: theme.fontColor,
      fontSize: convertWidth(17),
      width: widthTitle || '90%',
      textAlign: 'center',
      fontFamily: theme.fontFamily.medium,
    },
    backgroundColor: theme.colors.aquaHaze,
    headerTintColor: theme.tintColor,
    headerLeft: headLeftComponent,
    headerRight: headRightComponent,
  };
};

export const withDefaultStackNavigationConfig = (
  config: StackNavigationConfigInterface
): StackNavigatorConfig => {
  const { initialRouteName, activeIcon, unActiveIcon } = config;

  return {
    initialRouteName: initialRouteName,
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: ({
      navigation,
      screenProps,
    }: {
      navigation: NavigationScreenProp<any>;
      screenProps: any;
    }) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map((route: any) => {
          if (route.routeName === RouteName.SIGNATURE) {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      let isNotify = false;
      if (initialRouteName === RouteName.JOB_LIST) {
        isNotify = true;
      }

      return {
        tabBarIcon: ({ focused }: TabBarIconProps) => {
          if (focused) return BottomBarIconUI({ source: activeIcon, isNotify });
          return BottomBarIconUI({ source: unActiveIcon, isNotify });
        },
        tabBarVisible,
        tabBarOnPress: () => {
          if (navigation.state.routes.length > 1) navigation.push(initialRouteName);
          navigation.navigate(initialRouteName);
        },
      };
    },
  };
};
