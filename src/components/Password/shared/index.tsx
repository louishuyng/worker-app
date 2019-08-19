import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field } from 'formik';

import { ButtonUI, TextInputFormikUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { InputData } from '../models/recoveryPasswordTypes';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding-top: 12%;
  padding-horizontal: 20;
`;

const DescriptionWrapper = styled.Text`
  padding-vertical: 15;
`;

const TitleWrapper = styled(DescriptionWrapper)`
  font-size: 34;
`;

const WrapperBody = styled.View`
  flex: 0.85;
  justify-content: space-between;
`;

const WrapperButton = styled.View`
  flex: 0.15;
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
        <WrapperBody>
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View>
              <TitleWrapper>{title}</TitleWrapper>
              <DescriptionWrapper>{description}</DescriptionWrapper>
              {forms
                ? forms.map((form, key) => {
                  const {
                    type, label, placeholder, fieldName,
                  } = form;
                  return (
                    <Field
                      key={key}
                      type={type}
                      component={TextInputFormikUI}
                      name={fieldName}
                      placeholder={placeholder}
                      label={label}
                    />
                  );
                })
                : null}
            </View>
          </KeyboardAwareScrollView>
        </WrapperBody>
        <WrapperButton>
          <ButtonUI onPress={() => handleSubmit()} title={buttonTitle} type={Types.SUBMIT} />
        </WrapperButton>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LayoutPasswordScreen;
