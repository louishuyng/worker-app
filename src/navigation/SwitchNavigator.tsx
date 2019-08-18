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
import {
  SignInComponent,
  SignUpStepOneComponent,
  SignUpStepTwoComponent,
} from 'components/Auth';
import SendMailScreen from 'components/Password/RecoveryPassword/SendMail';
import { ConfirmMailScreen } from 'components/Password/RecoveryPassword';
import { ResetPasswordScreen } from 'components/Password';
import { getString } from 'locales';

export enum RouteName {
  SIGN_IN = getString('screen', 'LOGIN'),
  SIGN_UP_STEP_ONE = getString('screen', 'SIGN_UP_STEP_ONE'),
  SIGN_UP_STEP_TWO = getString('screen', 'SIGN_UP_STEP_TWO'),
  MAIN = getString('screen', 'MAIN'),
  SEND_MAIL = getString('screen', 'SEND_MAIL'),
  CONFIRM_MAIL = getString('screen', 'CONFIRM_MAIL'),
  RESET_PASSWORD = getString('screen', 'RESET_PASSWORD'),
}

const routeConfigMap: NavigationRouteConfigMap = {
  [RouteName.SIGN_IN]: SignInComponent,
  [RouteName.SIGN_UP_STEP_ONE]: SignUpStepOneComponent,
  [RouteName.SIGN_UP_STEP_TWO]: SignUpStepTwoComponent,
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
