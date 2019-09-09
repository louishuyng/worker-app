import React, { Component } from 'react';
import SignNatureCapture from 'react-native-signature-capture';
import styled from 'styled-components/native';
import { withNavigationFocus, NavigationScreenProp } from 'react-navigation';

import { convertHeight, convertWidth } from 'utils/convertSize';
import { RouteName } from 'constant';

const Container = styled.View`
  flex: 1;
`;

const WrapperIntro = styled.Text`
  margin-top: ${convertHeight(10)};
  margin-left: ${convertWidth(10)};
`;

interface Props {
  navigation: NavigationScreenProp<any>;
  isFocused: boolean;
}
interface State {
  base64DataUrl: string;
  signatureRef: any;
  dataSignature: any;
}

class SignaturePadUI extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      base64DataUrl: '',
      signatureRef: React.createRef(),
      dataSignature: undefined,
    };
  }
  ;
  componentDidMount() {
    this.props.navigation.setParams({
      onHandleClear: () => this.state.signatureRef.current.resetImage(),
      onHandleDone: () => {
        this.state.signatureRef.current.saveImage();
      },
    });
    const dataSignature = this.props.navigation.getParam('dataSignature');
    this.setState({
      dataSignature,
    });
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.forceUpdate();
    }
  }

  render() {
    const onSaveEvent = (result: any) => {
      this.props.navigation.navigate(RouteName.SIGN_TIME_SHEET, {
        dataSignature: result,
      });
    };

    return (
      <Container>
        <WrapperIntro>Please Sign Here</WrapperIntro>
        <SignNatureCapture
          ref={this.state.signatureRef}
          onSaveEvent={onSaveEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
          showBorder={false}
          style={{
            flex: 1,
          }} />
      </Container>
    );
  }
};

export default withNavigationFocus(SignaturePadUI);
