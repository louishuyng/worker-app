import React from 'react';
import styled from 'styled-components/native';

import { BottomTabBarIconProps } from './type';
import { convertWidth, convertHeight } from 'utils/convertSize';

const Wrapper = styled.View`

`;

const Icon = styled.Image`
  display: flex;
`;

const WrapperDotted = styled.View`
  background: white;
  align-items: center;
  justify-content: center;
  width: ${convertHeight(12)};
  height: ${convertHeight(12)};
  border-radius: ${convertHeight(6)};
  position: absolute;
  right: -20%;
  top: -18%;
  z-index: 3;
`;

const Dotted = styled.View`
  background: #FFA200;
  width: ${convertHeight(8)};
  height: ${convertHeight(8)};
  border-radius: ${convertHeight(4)};
`;

const ButtonBarIcon = ({ source, isNotify = false }: BottomTabBarIconProps) => (
  <Wrapper>
    {isNotify && (
      <WrapperDotted>
        <Dotted />
      </WrapperDotted>
    )}
    <Icon source={source} />
  </Wrapper>
);

export default ButtonBarIcon;
