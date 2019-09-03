import React from 'react';
import {
  createAppContainer,
  NavigationRouteConfigMap,
  StackNavigatorConfig,
  createStackNavigator } from 'react-navigation';

import { ThemeProvider } from 'styled-components';
import { createTheme, ThemeType } from 'utils/Theme';
import BottomMaterialNavigator from './BottomMaterialNavigator';

import { SignInScreen, SignUpStepOneScreen, SignUpStepTwoScreen } from 'screens/Auth';
import { SendEmailScreen, ConfirmMailScreen, ResetPasswordScreen } from 'screens/Password';
import { RouteName } from 'constant';

const routeConfigMap: NavigationRouteConfigMap = {
  [RouteName.SIGN_IN]: SignInScreen,
  [RouteName.SIGN_UP_STEP_ONE]: SignUpStepOneScreen,
  [RouteName.SIGN_UP_STEP_TWO]: SignUpStepTwoScreen,
  [RouteName.SEND_MAIL]: SendEmailScreen,
  [RouteName.CONFIRM_MAIL]: ConfirmMailScreen,
  [RouteName.RESET_PASSWORD]: ResetPasswordScreen,
  [RouteName.MAIN]: BottomMaterialNavigator,
};

const stackConfig: StackNavigatorConfig = {
  initialRouteName: RouteName.MAIN,
  headerMode: 'none',
};

const SwitchAnimatedNavigator = createStackNavigator(
  routeConfigMap,
  stackConfig
);

const AppContainer = createAppContainer(SwitchAnimatedNavigator);

export default function Navigator() {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)} >
      <AppContainer screenProps={{ theme: createTheme(ThemeType.LIGHT) }} />
    </ThemeProvider>
  );
}
