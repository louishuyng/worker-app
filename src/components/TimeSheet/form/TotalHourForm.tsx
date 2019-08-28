
import React from 'react';
import styled from 'styled-components/native';
import { Field } from 'formik';

import { InputAuthData } from 'components/Auth/models/authScreenConfig';
import { TextInputFormikUI } from 'components/common';
import { convertWidth } from 'utils/convertSize';

interface Props {
  data: Array<InputAuthData>
}

interface State {}

const WrapperForm = styled.View``;

const WrapperField = styled.View`
  width: ${convertWidth(168)};
`;

export default class TotalHourForm extends React.Component<Props, State> {
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
          <WrapperField key={index}>
            <Field
              type={type}
              component={TextInputFormikUI}
              name={fieldName}
              placeholder={placeholder}
              label={label}
            />
          </WrapperField>
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
