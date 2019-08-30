import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light as lightTheme } from '@eva-design/eva';
import SwitchNavigator from './navigation/SwitchNavigator';
import configureStore from 'store/configureStore';
import { colors } from 'utils/Theme';

const store = configureStore();

// 'color-white-default': colors.cerulean,
const theme = {
  ...lightTheme,
};

const App: FC = () => {
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
