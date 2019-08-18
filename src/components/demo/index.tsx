import React from 'react';
import { Text } from 'react-native';

import { getString } from 'locales';
import styled from 'styled-components/native';
import {
  RecoveryPasswordScreen,
  ResetPasswordScreen,
} from 'components/Password';
import SendMailScreen from 'components/Password/RecoveryPassword/SendMail';

interface Props {}

interface State {
  data: Array<string>;
}

const SafeArea = styled.SafeAreaView`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Demo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <SafeArea>
        <ResetPasswordScreen />
        {/* <Text>{getString('DEMO')}</Text> */}
      </SafeArea>
    );
  }
}
