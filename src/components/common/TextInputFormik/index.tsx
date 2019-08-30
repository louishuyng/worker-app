import React, { useState, useEffect } from 'react';
import { View, KeyboardType } from 'react-native';
import styled, { css } from 'styled-components/native';
import Dialog from 'react-native-dialog';

import { TextInputUIProps } from './types';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { getString } from 'locales';

const LableStyled = styled.Text`
  font-size: ${convertWidth(14)};
  padding-bottom: 5;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const InputStyled = styled.TextInput`
  border-width: 1;
  border-radius: 6;
  padding: 8px;
  font-size: ${convertWidth(14)};
  height: ${convertHeight(42)};
  margin-bottom: 5%;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.iron};
`;

const TextInputFormikUI = (props: TextInputUIProps) => {
  const {
    type,
    label,
    keyboardType,
    placeholder,
    isHideKeyboard,
    onTouch,
    field: { name },
    form: { setFieldValue, submitCount, errors, setFieldTouched, isValidating },
  } = props;

  const [isShowDiaglog, setIsShowDialog] = useState(false);

  useEffect(() => {
    if (Object.keys(errors)[0] === name && isValidating) setIsShowDialog(true);
  }, [errors[name], submitCount]);

  return (
    <View>
      <LableStyled>{label}</LableStyled>
      <InputStyled
        onTouchStart={() => onTouch}
        secureTextEntry={type === 'password' && true}
        onChangeText={(text) => setFieldValue(name, text)}
        editable={!isHideKeyboard && true}
        onBlur={() => setFieldTouched(name)}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
      {isShowDiaglog && (
        <View>
          <Dialog.Container visible={true}>
            <Dialog.Title>{getString('auth', 'TITLE_ERROR')}</Dialog.Title>
            <Dialog.Description>
              {errors[Object.keys(errors)[0]] as string || '' }
            </Dialog.Description>
            <Dialog.Button onPress={() => setIsShowDialog(false)} label={ getString('auth', 'OK')} />
          </Dialog.Container>
        </View>
      )}
    </View>
  );
};

export default TextInputFormikUI;
