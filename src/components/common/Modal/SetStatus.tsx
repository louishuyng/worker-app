import React from 'react';
import styled from 'styled-components/native';

import { View, Text } from 'react-native';
import { SetStatusProps } from './createModal';

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items:  center;
`;

const MainIcon = styled.Image`
  display: flex;
`;

const StatusLabel = styled.Text`
  padding: 5%;
  font-size: 17;
`;

const SetStatus = (props: SetStatusProps) => {
  const { statusLabel, mainIconSource } = props;
  return (
    <Wrapper>
      <MainIcon source={mainIconSource} />
      <StatusLabel>{statusLabel} ?</StatusLabel>
    </Wrapper>
  );
};

export default SetStatus;
