import { StackNavigatorConfig, TabBarIconProps } from 'react-navigation';
import { BottomBarIconUI } from 'components/common';
import { ImageSourcePropType } from 'react-native';

interface ConfigInterface {
  initialRouteName: string;
  activeIcon: ImageSourcePropType;
  unActiveIcon: ImageSourcePropType;
}

export const withDefaultStackNavigationConfig = (config: ConfigInterface): StackNavigatorConfig => {
  const { initialRouteName, activeIcon, unActiveIcon } = config;

  return {
    initialRouteName: initialRouteName,
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: ({ navigation, screenProps }: {
    navigation: any, screenProps: any
  }) => {
      const { theme } = screenProps;
      return {
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: {
          color: theme.fontColor,
          fontSize: 17,
        },
        headerTintColor: theme.tintColor,
        tabBarIcon: ({ focused }: TabBarIconProps) => {
          if (focused) return BottomBarIconUI({ source: activeIcon });
          return BottomBarIconUI({ source: unActiveIcon });
        },
      };
    },
  };
};
