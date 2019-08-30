
import React from 'react';
import styled from 'styled-components/native';
import { Field } from 'formik';

import { screenWidth } from 'utils/Styles';
import { CheckBoxUI } from 'components/common';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 4%;
  width: ${screenWidth};
`;

const WrapperField = styled.View`
`;

interface Props {
  data: Array<any>
}

interface State {
  isChecked: any;
}

export default class CheckBoxForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isChecked: {},
    };
  }

  render() {
    const { data } = this.props;

    const setStatusCheckBox = (key: any) => {
      let status = true;
      if (this.state.isChecked[key]) {
        status = !this.state.isChecked[key];
      }
      this.setState({
        isChecked: {
          ...this.state.isChecked,
          [key]: status,
        },
      });
    };

    return (
      <Container>
        {
          data.map((item, i) =>
            <CheckBoxUI
              key={i}
              isChecked={this.state.isChecked[i]}
              label={item.text}
              onPress={() => setStatusCheckBox(i)}
            />)
        }
      </Container>
    );
  }
}
