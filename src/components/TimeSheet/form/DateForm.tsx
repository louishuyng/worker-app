
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

const WrapperOneLine = styled.View``;

export default class InformationForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;

    return (
      <>
      <WrapperOneLine>
        <Field

        />
      </WrapperOneLine>
      </>
    );
  }
}
