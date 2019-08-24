import React from 'react';
import styled from 'styled-components/native';

import { SetStatusProps } from './createModal';
import { HELP_ICON } from 'utils/Icons';
import { convertWidth } from 'utils/convertSize';

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
  font-family: 'Roboto-Regular';
  font-size: ${convertWidth(17)};
`;

const SetStatus = (props: SetStatusProps) => {
  const { statusLabel } = props;
  return (
    <Wrapper>
      <MainIcon source={HELP_ICON} />
      <StatusLabel>{statusLabel}</StatusLabel>
    </Wrapper>
  );
};

export default SetStatus;
