import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';

const Icon = styled.Image`
  display: flex;
`;

interface BottomTabBarIconProps {
  source: ImageSourcePropType;
}

const ButtonBarIcon = ({ source }: BottomTabBarIconProps) => (
  <Icon source={source} />
);

export default ButtonBarIcon;
