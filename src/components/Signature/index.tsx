import React, { Component } from 'react';
import SignaturePad from 'react-native-signature-pad';
import styled from 'styled-components/native';
import { withNavigationFocus } from 'react-navigation';

import { convertHeight, convertWidth } from 'utils/convertSize';

const Container = styled.View`
  flex: 1;
`;

const WrapperIntro = styled.Text`
  margin-top: ${convertHeight(10)};
  margin-left: ${convertWidth(10)};
`;

interface State {
  base64DataUrl: string;
}

class SignaturePadUI extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      base64DataUrl: '',
    };
  };

  componentDidUpdate(prevProps: any) {
    if (prevProps.isFocused !== this.props.isFocused) {
      console.log('hello');
      this.forceUpdate();
    }
  }

  render() {
    return (
      <Container>
        <WrapperIntro>Please Sign Here</WrapperIntro>
        <SignaturePad
          onChange={this.signaturePadChange}
          style={{
            flex: 1,
            backgroundColor: 'white',
          }} />
      </Container>
    );
  }

  signaturePadChange = ({ base64DataUrl }: { base64DataUrl: string }) => {
    this.setState({
      base64DataUrl,
    });
  };
};

export default withNavigationFocus(SignaturePadUI);
