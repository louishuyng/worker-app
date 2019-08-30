import React, { useEffect, Component } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

import { TextInputUIProps } from './type';
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
  height: ${convertHeight(42)};
  text-align-vertical: center;
  font-size: ${convertHeight(16)};
  margin-bottom: 5%;
  padding-vertical: 0;
  padding-left: ${convertWidth(10)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.paleSky};
  background-color: ${({ theme }) => theme.colors.white};
  ${(props) => {
    const { isError, theme: { colors } } = props;
    if (isError) {
      return css` border-color: ${colors.alizarin};`;
    }
    return css` border-color: ${colors.iron};`;
  }};
`;

class TextInputFormikHourUI extends Component<TextInputUIProps, any> {
  render() {
    const {
      label,
      placeholder,
      isHideKeyboard,
      onTouch,
      value,
      field: { name },
      form: { submitCount, errors, touched, setFieldTouched, values },
    } = this.props;
    const isError = touched[name] && errors[name] && submitCount > 0;
    const editPlaceHolder = isError ? errors[name] : placeholder;
    return (
      <View>
        <LableStyled>{label}</LableStyled>
        <InputStyled
          value={value || values[name]}
          isError={isError}
          onTouchStart={() => onTouch}
          editable={!isHideKeyboard && true}
          onBlur={() => setFieldTouched(name)}
          placeholder={editPlaceHolder}
          placeholderTextColor={isError ? colors.alizarin : colors.iron}
        />
      </View>
    );
  }
};

export default TextInputFormikHourUI;
