import React from 'react';
import {
  createAppContainer, NavigationRouteConfigMap, createSwitchNavigator, SwitchNavigatorConfig,
} from 'react-navigation';
import { ThemeProvider } from 'styled-components';

import { createTheme, ThemeType } from 'utils/Theme';
import BottomMaterialNavigator from './BottomMaterialNavigator';
import { SignInComponent, SignUpStepOneComponent, SignUpStepTwoComponent } from 'components/Auth';

const routeConfigMap: NavigationRouteConfigMap = {
  SignIn: SignInComponent,
  SignUpStepOne: SignUpStepOneComponent,
  SignUpStepTwo: SignUpStepTwoComponent,
  Main: BottomMaterialNavigator,
};

const switchConfig: SwitchNavigatorConfig = {
  initialRouteName: 'SignUpStepOne',
};

const SwitchAnimatedNavigator = createSwitchNavigator(routeConfigMap, switchConfig);

const AppContainer = createAppContainer(SwitchAnimatedNavigator);

export default function Navigator() {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)} >
      <AppContainer screenProps={{ theme: createTheme(ThemeType.LIGHT) }} />
    </ThemeProvider>
  );
}
