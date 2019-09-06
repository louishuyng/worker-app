
import React from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp, NavigationActions } from 'react-navigation';

import { IC_BACK } from 'utils/Icons';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { View } from 'react-native';

interface Props {
  label?: string | number;
  navigation: NavigationScreenProp<any>
  isHideButton?: boolean;
}

interface State {}

const Wrapper = styled.View`
  flex-direction: row;
  margin-left: ${convertWidth(15)};
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled.Image`
`;

const LabelText = styled.Text`
  font-size: ${convertWidth(17)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export default class BackButtonUI extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, navigation } = this.props;
    const onPress = navigation.getParam('onPress') || undefined;

    return (
      <Wrapper>
        {!this.props.isHideButton && (
          <TouchableOpacity onPress={() => navigation.pop()}
            style={{ width: label ? convertWidth(15) : convertWidth(150) }} >
            <BackButton source={IC_BACK} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => onPress()}
          style={{ width: convertWidth(50), justifyContent: 'center' }}>
          {label && <LabelText>{label}</LabelText>}
        </TouchableOpacity>
      </Wrapper>
    );
  }
}
