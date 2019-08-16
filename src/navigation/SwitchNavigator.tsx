import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ThemeProvider } from 'styled-components';

import { createTheme, ThemeType } from 'utils/Theme';
import BottomMaterialNavigator from './BottomMaterialNavigator';

const AppContainer = createAppContainer(BottomMaterialNavigator);

export default function Navigator() {
  return (
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <AppContainer screenProps={{ theme: createTheme(ThemeType.LIGHT) }} />
    </ThemeProvider>
  );
}
