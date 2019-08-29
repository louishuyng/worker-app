import React from 'react';
import styled from 'styled-components/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { convertHeight, convertWidth } from 'utils/convertSize';
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
  flex-direction: row;
`;

const Image = styled.Image``;

const ExtendedWidthBox = styled.View`
   width: ${convertWidth(10)};
`;

const ExtendHeightBox = styled.View`
   height: ${convertHeight(10)};
`;

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
          <ExtendedWidthBox />
          <LocationText>{locationTitle}</LocationText>
        </WrapperLocationTile>
        <ExtendHeightBox />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            height: convertHeight(100),
            width: '100%',
          }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >

        </MapView>
      </Wrapper>
    );
  }
}
