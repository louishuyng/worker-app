import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'utils/Theme';
import { Types, ButtonUIProps } from './types';

const handleBackgroundColors = (type: Types) => {
  switch (type) {
    case Types.SUBMIT:
      return colors.skyBlue;
    case Types.ADD:
      return 'transparent';
    case Types.SETSTATUS:
      return 'transparent';
  }
};

const handleBorderColors = (type: Types) => {
  switch (type) {
    case Types.SUBMIT:
      return colors.skyBlue;
    case Types.SETSTATUS:
      return colors.skyBlue;
    case Types.ADD:
      return colors.paleSky;
  }
};

const handleTextColors = (type: Types) => {
  switch (type) {
    case Types.SUBMIT:
      return colors.white;
    case Types.ADD:
      return colors.paleSky;
    case Types.SETSTATUS:
      return colors.skyBlue;
  }
};

const ContainerStyled = styled.View`
  border-width: 1;
  border-radius: 7;
  background-color: ${({ type }: { type: Types }) =>
    handleBackgroundColors(type)};
  border-color: ${({ type }: { type: Types }) => handleBorderColors(type)};
`;

const TitleStyled = styled.Text`
  font-size: 17;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ type }: { type: Types }) => handleTextColors(type)};
`;

const ButtonUI = (props: ButtonUIProps) => {
  return (
    <ContainerStyled type={props.type}>
      <TouchableOpacity
        style={{ alignItems: 'center', paddingVertical: 17 }}
        onPress={props.onPress}
      >
        <TitleStyled type={props.type}>{props.title}</TitleStyled>
      </TouchableOpacity>
    </ContainerStyled>
  );
};

export default ButtonUI;
