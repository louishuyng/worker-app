import React, { FC } from 'react';
import { Provider } from 'react-redux';

import SwitchNavigator from './navigation/SwitchNavigator';
import configureStore from 'store/configureStore';

const store = configureStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
