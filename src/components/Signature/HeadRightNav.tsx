import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Dimensions, Platform, TouchableNativeFeedback } from 'react-native';
import { convertHeight, convertWidth } from 'utils/convertSize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationScreenProp } from 'react-navigation';

const CustomButton = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

const Container = styled.View`
  flex-direction: row;
`;

const ClearButton = styled.Text<{ isPortrait: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ isPortrait }) => isPortrait ? convertHeight(13) : convertWidth(17)};
  color: ${({ theme }) => theme.colors.paleSky};
`;

const DoneButton = styled.Text<{ isPortrait: boolean }>`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ isPortrait }) => isPortrait ? convertHeight(13) : convertWidth(17)};
  color: ${({ theme }) => theme.colors.cerulean};
  padding-horizontal: ${convertWidth(8)};
`;

interface Props {
  navigation: NavigationScreenProp<any>;
}
interface State {
  isPortrait: boolean;
}

export default class HeadRightNav extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isPortrait: true,
    };

    const isPortrait = (): boolean => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    Dimensions.addEventListener('change', () => {
      this.setState({
        isPortrait: isPortrait(),
      });
    });
  }

  render() {
    const { isPortrait } = this.state;
    const { navigation: { getParam } } = this.props;
    const onHandleClear = getParam('onHandleClear');
    const onHandleDone = getParam('onHandleDone');
    return (
      <Container>
        <CustomButton onPress={() => onHandleClear()}>
          <ClearButton isPortrait={isPortrait}>Clear</ClearButton>
        </CustomButton>
        <CustomButton onPress={() => onHandleDone()}>
          <DoneButton isPortrait={isPortrait}>Done</DoneButton>
        </CustomButton>
      </Container>
    );
  }
};
