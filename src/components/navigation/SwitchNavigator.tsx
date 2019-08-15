import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ThemeProvider } from 'styled-components';

import RootNavigator from './RootStackNavigator';
import { createTheme, ThemeType } from '../../utils/Theme';

const SwitchNavigator = createSwitchNavigator({
  RootNavigator,
}, {
  initialRouteName: 'RootNavigator',
});

const AppContainer = createAppContainer(SwitchNavigator);

export default function Navigator() {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <AppContainer screenProps={{ theme: createTheme(ThemeType.LIGHT) }} />
    </ThemeProvider>
  );
}
