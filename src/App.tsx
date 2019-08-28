import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light as lightTheme } from '@eva-design/eva';

import SwitchNavigator from './navigation/SwitchNavigator';
import configureStore from 'store/configureStore';

const store = configureStore();

const App: FC = () => {
  return (
    <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}
    >
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    </ApplicationProvider>
  );
};

export default App;
