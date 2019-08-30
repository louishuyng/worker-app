
import React, { Component } from 'react';
import styled, { css } from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import { Field } from 'formik';

import { PersonalStage, InputPersonalData } from '../models/personalScreenConfig';
import { FormikPersonalValues } from 'screens/Personal/models';
import TextInputFormikHourUI from 'components/common/TextInputFormikHour';
import { PersonalScreenModel } from '../models/personalScreenModel';

interface Props {
  stage: PersonalStage;
  navigation: { navigate: Function };
  values: FormikPersonalValues;
  errors: Object;
  handleSubmit: Function;
}

interface State {}

export default class PersonalScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  displayForm = (data: Array<InputPersonalData>): any => {
    return data.map((value, key) => {
      const { placeholder, fieldName, label, type, keyboardType } = value;
      return (
        <Field
          key={key}
          type={type}
          keyboardType={keyboardType}
          component={TextInputFormikHourUI}
          name={fieldName}
          placeholder={placeholder}
          label={label}
        />
      );
    });
  }

  render() {
    const {
      currentLabel, form,
    } = PersonalScreenModel(this.props.stage);

    const {
      navigation: { navigate },
      handleSubmit,
    } = this.props;

    return (
      <>
        {this.displayForm(form)}
      </>
    );
  }
}
