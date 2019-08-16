import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { TextInputUIProps } from './types';

const LableStyled = styled.Text`
  font-size: 18;
  padding-bottom: 5;
  font-weight: 300;
`;

const InputStyled = styled.TextInput`
  border-width: 1;
  border-radius: 6;
  height: 50;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 17px;
  background-color: #ffffff;
  border-color: #dbdede;
`;

const TextInputUI = (props: TextInputUIProps) => (
  <View>
    <LableStyled>{props.lable}</LableStyled>
    <InputStyled placeholder={props.placeholder} onChange={props.onchange} />
  </View>
);

export default TextInputUI;
