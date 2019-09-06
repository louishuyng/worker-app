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
}

class SignaturePadUI extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      base64DataUrl: '',
      signatureRef: React.createRef(),
    };
  }
  ;
  componentDidMount() {
    this.props.navigation.setParams({
      onHandleClear: () => this.state.signatureRef.current.resetImage(),
      onHandleDone: () => this.props.navigation.navigate(RouteName.JOB_LIST),
    });
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.isFocused !== this.props.isFocused) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <Container>
        <WrapperIntro>Please Sign Here</WrapperIntro>
        <SignNatureCapture
          ref={this.state.signatureRef}
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
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

  _onSaveEvent(result: any) {
    // result.encoded - for the base64 encoded png
    // result.pathName - for the file path name
    console.log(result);
  }

  _onDragEvent() {
    // This callback will be called when the user enters signature
  }
};

export default withNavigationFocus(SignaturePadUI);
