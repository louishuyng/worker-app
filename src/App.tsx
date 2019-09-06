import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Orientation from 'react-native-orientation-locker';

import SwitchNavigator from './navigation/SwitchNavigator';
import configureStore from 'store/configureStore';

const store = configureStore();

// 'color-white-default': colors.cerulean,
const theme = {
  ...lightTheme,
};

const App: FC = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <ApplicationProvider
      mapping={mapping}
      theme={theme}
    >
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    </ApplicationProvider>
  );
};

export default App;
