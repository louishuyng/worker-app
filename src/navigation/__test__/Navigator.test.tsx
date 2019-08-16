import * as React from 'react';
import renderer from 'react-test-renderer';

import SwitchNavigator from '../SwitchNavigator';

jest.mock('NativeModules', () => ({
  PlatformConstants: {
    forceTouchAvailable: false,
  },
}));

describe('Switch Navigator', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<SwitchNavigator />);
    expect(component).toMatchSnapshot();
  });
});
