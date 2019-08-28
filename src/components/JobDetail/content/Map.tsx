import React from 'react';
import styled from 'styled-components/native';

import { convertWidth } from 'utils/convertSize';
import { MAP_MARKER } from 'utils/Icons';

interface Props {
  locationTitle: string;
}

interface State {}

const Wrapper = styled.View`
  border-color: ${({ theme }) => theme.colors.iron};
  border-width: ${convertWidth(1)};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding-vertical: ${convertWidth(10)};
  padding-horizontal: ${convertWidth(10)};
  justify-content: space-between;
`;

const WrapperLocationTile = styled.View`
  justify-content: space-around;
  flex-direction: row;
`;

const Image = styled.Image``;

const LocationText = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(16)};
  color: ${({ theme }) => theme.colors.capeCod};
`;

export default class Map extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { locationTitle } = this.props;
    return (
      <Wrapper>
        <WrapperLocationTile>
          <Image source={MAP_MARKER} />
          <LocationText>{locationTitle}</LocationText>
        </WrapperLocationTile>
      </Wrapper>
    );
  }
}
