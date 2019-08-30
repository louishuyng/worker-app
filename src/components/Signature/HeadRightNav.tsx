import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { convertHeight, convertWidth } from 'utils/convertSize';

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

interface State {
  isPortrait: boolean;
}

export default class HeadRightNav extends Component<any, State> {
  constructor(props: any) {
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
    return (
      <Container>
        <ClearButton isPortrait={isPortrait}>Clear</ClearButton>
        <DoneButton isPortrait={isPortrait}>Done</DoneButton>
      </Container>
    );
  }
};
