
import React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

import { TextInputUIProps } from './types';
import { colors } from 'utils/Theme';
import { screenWidth, screenHeight } from 'utils/Styles';
import { convertWidth, convertHeight } from 'utils/convertSize';

const LableStyled = styled.Text`
  font-size: ${convertWidth(14)};
  padding-bottom: 5;
  font-weight: 300;
  font-family: 'Roboto-Regular';
`;

const InputStyled = styled.TextInput<{ isError: any, placeholder: any }>`
  border-width: 1;
  border-radius: 6;
  padding: 8px;
  font-size: ${convertWidth(14)};
  height: ${convertHeight(42)};
  margin-bottom: 5%;
  font-family: 'Roboto-Regular';
  background-color: ${({ theme }) => theme.colors.white};
  ${(props) => {
    const { isError, theme: { colors } } = props;
    if (isError) {
      return css` border-color: ${colors.alizarin};`;
    }
    return css` border-color: ${colors.iron};`;
  }};
`;

const TextInputFormikUI = (props: TextInputUIProps) => {
  const {
    type,
    label,
    placeholder,
    isHideKeyboard,
    onTouch,
    field: { name },
    form: { setFieldValue, submitCount, errors, touched, setFieldTouched },
  } = props;
  const isError = touched[name] && errors[name] && submitCount > 0;
  const editPlaceHolder = isError ? errors[name] : placeholder;
  return (
    <View>
      <LableStyled>{label}</LableStyled>
      <InputStyled
        isError={isError}
        onTouchStart={() => onTouch}
        secureTextEntry={type === 'password' && true}
        onChangeText={(text) => setFieldValue(name, text)}
        editable={!isHideKeyboard && true}
        onBlur={() => setFieldTouched(name)}
        placeholder={editPlaceHolder}
        placeholderTextColor={isError ? colors.alizarin : colors.iron}
      />
    </View>
  );
};

export default TextInputFormikUI;
