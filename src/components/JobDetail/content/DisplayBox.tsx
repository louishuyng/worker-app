
import React from 'react';
import styled from 'styled-components/native';

import { convertWidth } from 'utils/convertSize';

interface Props {
  contentData: string;
}

interface State {}

const Wrapper = styled.View`
  border-color: ${({ theme }) => theme.colors.iron};
  border-width: ${convertWidth(1)};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding-vertical: ${convertWidth(10)};
  padding-horizontal: ${convertWidth(10)};
  justify-content: space-between;
`;

const Content = styled.Text`
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(14)};
`;

export default class DisplayBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { contentData } = this.props;
    return (
      <Wrapper>
        <Content>
          {contentData}
        </Content>
      </Wrapper>
    );
  }
}
