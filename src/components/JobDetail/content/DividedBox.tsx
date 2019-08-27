import React from 'react';
import styled from 'styled-components/native';

import { convertWidth, convertHeight } from 'utils/convertSize';

interface Props {
  titleData?: Array<string>;
  contentData: Array<string>;
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

const WrapperContent = styled.View`
`;

const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.paleSky};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(14)};
`;

const ContentText = styled.Text`
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(16)};
`;

const WrapperLine = styled.View`
  height: ${convertHeight(34)};
  justify-content: center;
  align-items: center;
`;

const DividedLine = styled.View`
  height: ${convertHeight(1)};
  width: 100%;
  background: ${({ theme }) => theme.colors.iron};
`;

export default class DividedBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  renderContent = (data: Array<string>) => {
    return data.map((value, index) => {
      return (
        <WrapperContent key={index}>
          <TitleText>{value}</TitleText>
          <ContentText>{this.props.contentData[index]}</ContentText>
          {index !== data.length - 1 && (
            <WrapperLine>
              <DividedLine />
            </WrapperLine>
          )}
        </WrapperContent>
      );
    });
  }

  render() {
    const { titleData } = this.props;
    return (
      <Wrapper>
        {this.renderContent(titleData as Array<string>)}
      </Wrapper>
    );
  }
}
