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

const WrapperForm = styled.View`
  
`;

const WrapperFormInline = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WrapperField = styled.View`
  width: ${convertWidth(168)};
`;

export default class RequestorForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <>
      <WrapperForm>
        <Field
          type={data[0].type}
          component={TextInputFormikUI}
          name={data[0].fieldName}
          placeholder={data[0].placeholder}
          label={data[0].label}
        />
      </WrapperForm>
      <WrapperFormInline>
        <WrapperField>
          <Field
            type={data[1].type}
            component={TextInputFormikUI}
            name={data[1].fieldName}
            placeholder={data[1].placeholder}
            label={data[1].label}
          />
        </WrapperField>
        <WrapperField>
          <Field
            type={data[2].type}
            component={TextInputFormikUI}
            name={data[2].fieldName}
            placeholder={data[2].placeholder}
            label={data[2].label}
          />
        </WrapperField>
      </WrapperFormInline>
      </>
    );
  }
}
