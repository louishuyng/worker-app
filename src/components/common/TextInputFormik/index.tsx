
import React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

import { TextInputUIProps } from './types';
import { colors } from 'utils/Theme';
import { convertWidth, convertHeight } from 'utils/convertSize';

const LableStyled = styled.Text`
  font-size: ${convertWidth(14)};
  padding-bottom: 5;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const InputStyled = styled.TextInput<{ isError: any, placeholder: any }>`
  border-width: 1;
  border-radius: 6;
  padding-left: 20;
  font-size: ${convertWidth(16)};
  height: ${convertHeight(42)};
  margin-bottom: 5%;
  font-family: ${({ theme }) => theme.fontFamily.regular};
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
    value,
    field: { name },
    form: { setFieldValue, submitCount, errors, touched, setFieldTouched },
  } = props;
  const isError = touched[name] && errors[name] && submitCount > 0;
  const editPlaceHolder = isError ? errors[name] : placeholder;
  return (
    <View>
      <LableStyled>{label}</LableStyled>
      <InputStyled
        value={value.hour !== '' && value.minute !== '' ? `${value.hour}:${value.minute}` : ''}
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
