import React from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import Dialog from 'react-native-dialog';

import { TextInputUIProps } from './types';
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
  padding: 8px;
  font-size: ${convertWidth(14)};
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
    field: { name },
    form: { setFieldValue, submitCount, errors, touched, setFieldTouched },
  } = props;
  const isError = touched[name] && errors[name] && submitCount > 0;
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
        placeholder={placeholder}
      />
      <View>
        <Dialog.Container visible={isError as boolean}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this account? You cannot undo this action.
          </Dialog.Description>
        </Dialog.Container>
      </View>
    </View>
  );
};

export default TextInputFormikUI;
