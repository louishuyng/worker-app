import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field } from 'formik';

import { ButtonUI, TextInputFormikUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { InputData } from '../models/recoveryPasswordTypes';
import { screenHeight } from 'utils/Styles';
import { convertWidth, convertHeight } from 'utils/convertSize';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding-top: 12%;
  padding-horizontal: 20;
`;

const DescriptionWrapper = styled.Text`
  padding-vertical: 15;
  font-size: ${convertWidth(14)};
  color: ${({ theme }) => theme.colors.paleSky};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const TitleWrapper = styled(DescriptionWrapper)`
  font-size: ${convertWidth(34)};
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;

const WrapperTitle = styled.View`
  flex: 1 0 ${screenHeight * 0.15}px;
`;

const WrapperBody = styled.View`
  flex: 1 0 ${screenHeight * 0.60}px;
  justify-content: space-between;
`;

const WrapperFooter = styled.View`
  flex: 1 0 ${screenHeight * 0.25}px;
`;

const WrapperButton = styled.View`
  height: ${convertHeight(56)};
`;

interface AboutPasswordScreenProps {
  title: string;
  description: string | null;
  forms?: Array<InputData>;
  buttonTitle: string;
  onPress: () => any;
  handleSubmit: () => any;
}

const LayoutPasswordScreen = (props: AboutPasswordScreenProps) => {
  const { title, description, forms, buttonTitle, onPress, handleSubmit } = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <WrapperTitle>
          <TitleWrapper>{title}</TitleWrapper>
        </WrapperTitle>
        <WrapperBody>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <DescriptionWrapper>{description}</DescriptionWrapper>
            {forms
              ? forms.map((form, key) => {
                const {
                  type, label, placeholder, fieldName, keyboardType,
                } = form;
                return (
                  <Field
                    key={key}
                    type={type}
                    component={TextInputFormikUI}
                    name={fieldName}
                    placeholder={placeholder}
                    label={label}
                    keyboardType={keyboardType}
                  />
                );
              })
              : null}
          </KeyboardAwareScrollView>
        </WrapperBody>
        <WrapperFooter>
          <WrapperButton>
            <ButtonUI onPress={() => onPress()} title={buttonTitle} type={Types.SUBMIT} />
          </WrapperButton>
        </WrapperFooter>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LayoutPasswordScreen;
