import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

interface Props {}

interface State {}

export default class MapViewComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    );
  }
}
