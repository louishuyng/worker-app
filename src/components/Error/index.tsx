import React from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp } from 'react-navigation';

const TextError = styled.Text``;

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {}

export default class Error extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const message = this.props.navigation.getParam('message');
    return (
      <TextError>{message}</TextError>
    );
  }
}
