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
  font-weight: bold;
  text-transform: capitalize;
  font-family: 'Roboto-Regular';
  color: ${({ type }: { type: Types }) => handleTextColors(type)};
`;

const ButtonUI = (props: ButtonUIProps) => {
  const { type, title, onPress } = props;
  return (
    <ContainerStyled type={type}>
      <TouchableOpacity
        style={{ alignItems: 'center', paddingVertical: 14 }}
        onPress={props.onPress}
      >
        <TitleStyled type={type}>{title}</TitleStyled>
      </TouchableOpacity>
    </ContainerStyled>
  );
};

export default ButtonUI;
