import React, { Component } from 'react';
import styled from 'styled-components/native';

import { SkipSignatureProps } from './createModal';
import CheckBoxUI from 'components/common/CheckBox';
import { screenHeight } from 'utils/Styles';

const Container = styled.ScrollView`
  padding-horizontal: 5%;
  max-height: ${screenHeight / 3};
`;

interface SkipSignatureState {
  isChecked: any;
}
export default class SkipSignature extends Component<SkipSignatureProps, SkipSignatureState> {
  constructor(props: SkipSignatureProps) {
    super(props);
    this.state = {
      isChecked: {},
    };
  }

  render() {
    const { reasons } = this.props;

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
      <Container showsVerticalScrollIndicator={false}>
        {
          reasons.map((reason, i) =>
            <CheckBoxUI
              key={i}
              isChecked={this.state.isChecked[i]}
              label={reason}
              onPress={() => setStatusCheckBox(i)}
            />)
        }
      </Container>
    );
  }
};
