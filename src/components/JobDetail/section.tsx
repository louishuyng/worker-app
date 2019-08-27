import React, { ReactComponentElement } from 'react';
import styled from 'styled-components/native';

import { convertHeight, convertWidth } from 'utils/convertSize';

interface Props {
  titleHeader?: string;
  Content: any;
}

interface State {}

const Header = styled.View<{titleHeader: any}>`
  height: ${({ titleHeader }) => titleHeader ? convertHeight(30) : convertHeight(5)};
  justify-content: center;
`;

const TitleHeader = styled.Text`
  text-transform: uppercase;
  font-size: ${convertWidth(13)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.paleSky};
  padding-left: ${convertWidth(10)};
`;

export default class SectionJobDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titleHeader, Content } = this.props;
    return (
      <>
        <Header titleHeader={titleHeader} >
          <TitleHeader>{titleHeader}</TitleHeader>
        </Header>
        <Content />
      </>
    );
  }
}
