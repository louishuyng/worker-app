import React, { Component } from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Field } from 'formik';

import { AuthStage, InputAuthData } from '../models/authScreenConfig';
import { AuthScreenModel } from '../models/authScreenModel';
import ButtonUI from 'components/common/Button/Button';
import { Types } from 'components/common/Button/types';
import { IC_STEP_ONE_SIGN_UP, IC_STEP_TWO_SIGN_UP } from 'utils/Icons';
import { getString } from 'locales';
import { FormikAuthValues } from 'screens/Auth/models';
import TextInputFormikUI from 'components/common/TextInputFormik/TextInputFormik';

interface Props {
  stage: AuthStage;
  navigation: {navigate: Function};
  values: FormikAuthValues;
  errors: Object;
  handleSubmit: Function;
}

interface State {
}

const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
`;

const WrapperTitle = styled.View`
  padding-left: 5%;
`;

const KeyboardAvoidingView = styled(KeyboardAwareScrollView)`
  flex: 0.8;
  padding: 0% 5%;
`;

const WrapperStatus = styled.View`
  margin-top: 5%;
`;

const WrapperForm = styled.View`
  margin-top: 10%;
`;

const WrapperFooter = styled.View`
  flex: 0.2;
  padding: 5%;
  justify-content: center;
`;

const Title = styled.Text`
  margin-top: 5%;
  font-size: 34px;
  font-weight: bold;
`;

const ForgetPasswordLabel = styled.Text`
  font-size: 14px;
  text-align: right;
`;

const StepIcon = styled.Image`
  display: flex;
`;

const StepLabel = styled.Text`
  font-size: 13;
  margin-top: 2%;
`;

const SuggestionTitle = styled.Text`
  font-size: 14px;
  align-self: center;
  margin-top: 10%;
  margin-bottom: 2%;
`;

const NavigationTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  align-self: center;
  color: ${({ theme }) => theme.colors.skyBlue}
`;

export default class AuthScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  displayForm = (data: Array<InputAuthData>): any => {
    return data.map((value, key) => {
      const { placeholder, fieldName, title, type } = value;
      return (
        <Field
          key={key}
          type={type}
          component={TextInputFormikUI}
          name={fieldName}
          placeholder={placeholder}
          label={title}
        />
      );
    });
  }

  render() {
    const {
      title, form, buttonLabel, suggestionTitle, stepLabel,
      navigatorTitle, status, navigator, subNavigator,
    } = AuthScreenModel(this.props.stage);
    const {
      navigation: { navigate },
      handleSubmit,
    } = this.props;
    const isLogin = status === AuthStage.LOGIN;
    const isStepOne = status === AuthStage.SIGNUP_STEP_ONE;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <WrapperTitle>
            <Title>{title}</Title>
            {isLogin || (
              <WrapperStatus>
                {isStepOne ? (
                  <StepIcon source={IC_STEP_ONE_SIGN_UP}/>
                ) : (
                  <StepIcon source={IC_STEP_TWO_SIGN_UP}/>
                )}
                <StepLabel>{stepLabel}</StepLabel>
              </WrapperStatus>
            )}
          </WrapperTitle>
          <KeyboardAvoidingView>
            <WrapperForm>
              {this.displayForm(form)}
              {isLogin && <ForgetPasswordLabel onPress={() => navigate(getString('screen', 'SEND_MAIL'))}>
                {getString('auth', 'FORGET_PASSWORD')}
              </ForgetPasswordLabel>}
            </WrapperForm>
          </KeyboardAvoidingView>
          <WrapperFooter>
            <ButtonUI type={Types.SUBMIT} title={buttonLabel} onPress={() => handleSubmit()}/>
            <SuggestionTitle>{suggestionTitle}</SuggestionTitle>
            <NavigationTitle onPress={() => navigate(subNavigator)}>{navigatorTitle}</NavigationTitle>
          </WrapperFooter>
        </Container>
      </TouchableWithoutFeedback>

    );
  }
}
