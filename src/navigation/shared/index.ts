import { StackNavigatorConfig, TabBarIconProps, NavigationScreenProp, NavigationScreenConfig } from 'react-navigation';

import { BottomBarIconUI } from 'components/common';
import { ImageSourcePropType } from 'react-native';
import { convertWidth } from 'utils/convertSize';

interface StackNavigationConfigInterface {
  initialRouteName: string;
  activeIcon: ImageSourcePropType;
  unActiveIcon: ImageSourcePropType;
}

export const wihtDefaultNavigtaionConfig = (
  { navigation, screenProps, headLeftComponent, widthTitle }:
  { navigation: NavigationScreenProp<any>, screenProps: any, headLeftComponent?: any, widthTitle?: any }
): NavigationScreenConfig<any> => {
  const { theme } = screenProps;
  return {
    title: navigation.state.routeName,
    headerStyle: {
      backgroundColor: theme.background,
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
  };
};

export const withDefaultStackNavigationConfig = (config: StackNavigationConfigInterface): StackNavigatorConfig => {
  const { initialRouteName, activeIcon, unActiveIcon } = config;

  return {
    initialRouteName: initialRouteName,
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: ({ navigation, screenProps }: {
    navigation: any, screenProps: any
  }) => {
      return {
        tabBarIcon: ({ focused }: TabBarIconProps) => {
          if (focused) return BottomBarIconUI({ source: activeIcon });
          return BottomBarIconUI({ source: unActiveIcon });
        },
      };
    },
  };
};
