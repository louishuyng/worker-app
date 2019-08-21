import React from 'react';
import styled from 'styled-components/native';

import { BottomTabBarIconProps } from './type';

const Icon = styled.Image`
  display: flex;
`;

const ButtonBarIcon = ({ source }: BottomTabBarIconProps) => (
  <Icon source={source} />
);

export default ButtonBarIcon;
