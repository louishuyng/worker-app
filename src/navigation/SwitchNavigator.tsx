import React from 'react';
import {
  createAppContainer,
  NavigationRouteConfigMap,
  createSwitchNavigator,
  SwitchNavigatorConfig,
} from 'react-navigation';
import { ThemeProvider } from 'styled-components';

import { createTheme, ThemeType } from 'utils/Theme';
import BottomMaterialNavigator from './BottomMaterialNavigator';

import { SignInScreen, SignUpStepOneScreen, SignUpStepTwoScreen } from 'screens/Auth';
import SendMailScreen from 'components/Password/RecoveryPassword/SendMail';
import { ConfirmMailScreen } from 'components/Password/RecoveryPassword';
import { ResetPasswordScreen } from 'components/Password';
import { RouteName } from 'constant';

const routeConfigMap: NavigationRouteConfigMap = {
  [RouteName.SIGN_IN]: SignInScreen,
  [RouteName.SIGN_UP_STEP_ONE]: SignUpStepOneScreen,
  [RouteName.SIGN_UP_STEP_TWO]: SignUpStepTwoScreen,
  [RouteName.SEND_MAIL]: SendMailScreen,
  [RouteName.CONFIRM_MAIL]: ConfirmMailScreen,
  [RouteName.RESET_PASSWORD]: ResetPasswordScreen,
  [RouteName.MAIN]: BottomMaterialNavigator,
};

const switchConfig: SwitchNavigatorConfig = {
  initialRouteName: 'SignUpStepOne',
};

const SwitchAnimatedNavigator = createSwitchNavigator(
  routeConfigMap,
  switchConfig
);

const AppContainer = createAppContainer(SwitchAnimatedNavigator);

export default function Navigator() {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)} >
      <AppContainer screenProps={{ theme: createTheme(ThemeType.LIGHT) }} />
    </ThemeProvider>
  );
}
