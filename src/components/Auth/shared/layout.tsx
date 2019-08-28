import React, { Component } from 'react';
import styled, { css } from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Field } from 'formik';

import { AuthStage, InputAuthData } from '../models/authScreenConfig';
import { AuthScreenModel } from '../models/authScreenModel';
import { ButtonUI, TextInputFormikUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { IC_STEP_ONE_SIGN_UP, IC_STEP_TWO_SIGN_UP } from 'utils/Icons';
import { getString } from 'locales';
import { FormikAuthValues } from 'screens/Auth/models';
import { RouteName } from 'constant';
import { screenHeight, screenWidth } from 'utils/Styles';
import { convertWidth, convertHeight } from 'utils/convertSize';

interface Props {
  stage: AuthStage;
  navigation: { navigate: Function };
  values: FormikAuthValues;
  errors: Object;
  handleSubmit: Function;
}

interface State {
}

const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;

const WrapperTitle = styled.View<{isLogin: any}>`
  padding-left: 5%;
  flex: 1 0 ${screenHeight * 0.2}px;
  justify-content: space-around;
  ${({ isLogin }) => {
    if (isLogin) {
      return css`
        flex: 1 0 ${screenHeight * 0.15}px;
      `
      ;
    };
  }}
`;

const KeyboardAvoidingView = styled(KeyboardAwareScrollView)<{isLogin: any}>`
  flex: 1 0 ${screenHeight * 0.5}px;
  padding: 0% 5%;

  ${({ isLogin }) => {
    if (isLogin) {
      return css`
        flex: 1 0 ${screenHeight * 0.55}px;
      `
      ;
    };
  }}
`;

const WrapperStatus = styled.View``;

const WrapperForm = styled.View``;

const WrapperFooter = styled.View`
  flex: 1 0 ${screenHeight * 0.3}px;
  padding: 5%;
  justify-content: center;
`;

const Title = styled.Text`
  margin-top: 5%;
  font-size: ${convertWidth(34)};
  font-family: ${({ theme }) => theme.fontFamily.bold};
`;

const ForgetPasswordLabel = styled.Text`
  font-size: ${convertWidth(14)};
  text-align: right;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const StepIcon = styled.Image`
  display: flex;
`;

const StepLabel = styled.Text`
  font-size: ${convertWidth(13)};
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.paleSky};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const SuggestionTitle = styled.Text`
  font-size: ${convertWidth(14)};
  align-self: center;
  margin-top: 10%;
  margin-bottom: 2%;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const NavigationTitle = styled.Text`
  font-size: ${convertWidth(17)};
  align-self: center;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.skyBlue};
`;

const WrapperButton = styled.View`
  height: ${convertHeight(56)};
`;

export default class AuthScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  displayForm = (data: Array<InputAuthData>): any => {
    return data.map((value, key) => {
      const { placeholder, fieldName, label, type } = value;
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
    });
  }

  render() {
    const {
      title, form, buttonLabel, suggestionTitle, stepLabel,
      navigatorTitle, status, navigator, subNavigator, afterIconData,
    } = AuthScreenModel(this.props.stage);
    const {
      navigation: { navigate },
    } = this.props;
    const isLogin = status === AuthStage.LOGIN;
    const isStepOne = status === AuthStage.SIGNUP_STEP_ONE;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <WrapperTitle isLogin={isLogin}>
            <Title>{title}</Title>
            {isLogin || (
              <WrapperStatus>
                {isStepOne ? (
                  <StepIcon source={IC_STEP_ONE_SIGN_UP} />
                ) : (
                  <StepIcon source={IC_STEP_TWO_SIGN_UP} />
                )}
                <StepLabel>{stepLabel}</StepLabel>
              </WrapperStatus>
            )}
          </WrapperTitle>
          <KeyboardAvoidingView isLogin={isLogin} showsVerticalScrollIndicator={false}>
            <WrapperForm>
              {this.displayForm(form)}
              {isLogin && <ForgetPasswordLabel onPress={() => navigate(RouteName.SEND_MAIL)}>
                {getString('auth', 'FORGET_PASSWORD')}
              </ForgetPasswordLabel>}
            </WrapperForm>
          </KeyboardAvoidingView>
          <WrapperFooter>
            <WrapperButton>
              <ButtonUI
                type={Types.SUBMIT}
                title={buttonLabel}
                onPress={() => navigate(navigator)}
                afterIcon={afterIconData}
              />
            </WrapperButton>
            <SuggestionTitle>{suggestionTitle}</SuggestionTitle>
            <NavigationTitle onPress={() => navigate(subNavigator)}>{navigatorTitle}</NavigationTitle>
          </WrapperFooter>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}
