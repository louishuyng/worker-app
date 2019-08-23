import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { TextInputUIProps } from './types';

const LableStyled = styled.Text`
  font-size: 18;
  padding-bottom: 5;
  font-weight: 300;
  font-family: 'Roboto-Regular';
`;

const InputStyled = styled.TextInput`
  border-width: 1;
  border-radius: 6;
  padding: 8px;
  font-size: 17px;
  margin-bottom: 5%;
  font-family: 'Roboto-Regular';
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
