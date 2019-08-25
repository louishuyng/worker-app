import { StackNavigatorConfig, TabBarIconProps } from 'react-navigation';
import { BottomBarIconUI } from 'components/common';
import { ImageSourcePropType } from 'react-native';

interface StackNavigationConfigInterface {
  initialRouteName: string;
  activeIcon: ImageSourcePropType;
  unActiveIcon: ImageSourcePropType;
}

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
