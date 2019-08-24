
import React from 'react';
import styled from 'styled-components/native';

import { IC_BACK } from 'utils/Icons';
import { convertWidth } from 'utils/convertSize';

interface Props {
  label?: string;
  onPress: any;
}

interface State {}

const Wrapper = styled.View`
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled.Image`
  margin-left: ${convertWidth(9)};
  margin-right: ${convertWidth(9)};
`;

const LabelText = styled.Text`
  font-size: ${convertWidth(17)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export default class BackButtonUI extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, onPress } = this.props;
    return (
      <Wrapper >
        <TouchableOpacity onPress={onPress}>
          <BackButton source={IC_BACK} />
          {label && <LabelText>{label}</LabelText>}
        </TouchableOpacity>
      </Wrapper>
    );
  }
}
