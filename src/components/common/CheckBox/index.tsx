import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';

import { CHECK_MARK } from 'utils/Icons';
import { convertWidth } from 'utils/convertSize';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 2%;
`;

const WrapperCheckBox = styled.TouchableOpacity`
  width: 27;
  height: 27;
  border-radius: 4;
  justify-content: center;
  align-items: center;
  margin-right: 3%;
  border: ${
  ({ theme, isChecked }: { theme: DefaultTheme, isChecked?: boolean }) =>
    isChecked ? theme.colors.skyBlue : theme.colors.iron};
  background-color: ${
  ({ theme, isChecked }: { theme: DefaultTheme, isChecked?: boolean }) =>
    isChecked ? theme.colors.skyBlue : theme.colors.white}
`;

const CheckMark = styled.Image``;

const WrapperTitle = styled.Text`
  padding-left: ${convertWidth(6)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(14)};
`;

interface CheckBoxUIProps {
  isChecked: boolean;
  label: string;
  onPress: (e: any) => void;
}

const CheckBoxUI = (props: CheckBoxUIProps) => {
  const { label, onPress, isChecked } = props;
  return (
    <Container>
      <WrapperCheckBox isChecked={isChecked} onPress={onPress} >
        {isChecked && <CheckMark source={CHECK_MARK} />}
      </WrapperCheckBox>
      <WrapperTitle>{label}</WrapperTitle>
    </Container>
  );
};

export default CheckBoxUI;
