import 'react-native';
import * as React from 'react';
import renderer from 'react-test-renderer';

import Demo from '../index';

const props = {
  navigation: {
    goBack: jest.fn(),
  },
};

const component = (
  <Demo {...props} />
);

describe('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
