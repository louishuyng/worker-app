import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { TextInputUIProps } from './types';
import { convertWidth } from 'utils/convertSize';

const LableStyled = styled.Text`
  font-size: ${convertWidth(14)};
  padding-bottom: 5;
  font-weight: 300;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const InputStyled = styled.TextInput`
  border-width: 1;
  border-radius: 6;
  padding: 8px;
  font-size: ${convertWidth(14)};
  margin-bottom: 5%;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  background-color: ${({ theme }) => theme.colors.white};
  border-color: #dbdede;
`;

const TextInputUI = (props: TextInputUIProps) => (
  <View>
    <LableStyled>{props.lable}</LableStyled>
    <InputStyled placeholder={props.placeholder} onChange={props.onchange} />
  </View>
);

export default TextInputUI;
