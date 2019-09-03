
import React from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp, NavigationActions } from 'react-navigation';

import { IC_BACK } from 'utils/Icons';
import { convertWidth, convertHeight } from 'utils/convertSize';

interface Props {
  label?: string | number;
  navigation: NavigationScreenProp<any>
}

interface State {}

const Wrapper = styled.View`
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled.Image`
  margin-left: ${convertWidth(9)};
  margin-right: ${convertWidth(9)};
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

    const handleNavigate = () => {
      const routeBack = navigation.getParam('routeBack');
      const param = navigation.getParam('param');
      if (routeBack) return navigation.navigate(routeBack, { data: param });
      navigation.pop();
    };
    const onPress = navigation.getParam('onPress') || undefined;

    const handleOnPress = () => {
      if (onPress) return onPress();
      return handleNavigate();
    };
    return (
      <Wrapper >
        <TouchableOpacity onPress={() => handleOnPress()} style={{
          width: convertWidth(150),
        }} >
          <BackButton source={IC_BACK} />
          {label && <LabelText>{label}</LabelText>}
        </TouchableOpacity>
      </Wrapper>
    );
  }
}
