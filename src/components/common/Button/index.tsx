import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'utils/Theme';
import { Types, ButtonUIProps } from './types';
import { convertWidth } from 'utils/convertSize';

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

const TouchableOpacity = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleStyled = styled.Text`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ type }: { type: Types }) => handleTextColors(type)};
  font-size: ${convertWidth(17)};
`;

const AfterIcon = styled.Image``;

const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ButtonUI = (props: ButtonUIProps) => {
  const { type, title, onPress, afterIcon } = props;
  return (
    <ContainerStyled type={type}>
      <TouchableOpacity
        onPress={onPress}
      >
        <WrapperTitle>
          <TitleStyled type={type}>
            {title}
          </TitleStyled>
          {afterIcon && <AfterIcon source={afterIcon as ImageSourcePropType} />}
        </WrapperTitle>
      </TouchableOpacity>
    </ContainerStyled>
  );
};

export default ButtonUI;
