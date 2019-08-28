import React from 'react';
import styled from 'styled-components/native';
import { Field } from 'formik';

import { InputAuthData } from 'components/Auth/models/authScreenConfig';
import { TextInputFormikUI } from 'components/common';

interface Props {
  data: Array<InputAuthData>
}

interface State {}

const WrapperForm = styled.View``;

export default class InformationForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;

    const renderForm = (data: Array<InputAuthData>) => {
      return data.map((value, index) => {
        const { fieldName, label, placeholder, type } = value;
        return (
          <Field
            key={index}
            type={type}
            component={TextInputFormikUI}
            name={fieldName}
            placeholder={placeholder}
            label={label}
          />
        );
      });
    };

    return (
      <WrapperForm>
        {renderForm(data)}
      </WrapperForm>
    );
  }
}
