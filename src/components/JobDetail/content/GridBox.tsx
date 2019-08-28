import React from 'react';
import styled, { css } from 'styled-components/native';

import { convertWidth, convertHeight } from 'utils/convertSize';
import { array } from 'yup';

interface Props {
  titleData: string[][];
  contentData: string[][];
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
  flex: 0.5;
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

const WrapperSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WrapperLine = styled.View<{isVertical: boolean}>`
  height: ${convertHeight(34)};
  justify-content: center;
  align-items: center;
  ${({ isVertical }) => {
    if (isVertical) {
      return css`
        height: ${convertHeight(1)};
        transform: rotate(90deg);
      `;
    };
  }}
`;

const DividedLine = styled.View<{isVertical?: boolean}>`
  height: ${convertHeight(1)};
  width: ${({ isVertical }) => isVertical as boolean ? convertHeight(33) : '100%'};
  background: ${({ theme }) => theme.colors.iron};
`;

export default class GridBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  renderContent = (data: Array<string>, arrayNumber: number) => {
    return data.map((value, index) => {
      return (
        <>
          {index === data.length - 1 && (
            <WrapperLine isVertical>
              <DividedLine isVertical/>
            </WrapperLine>
          )}
          <WrapperContent key={index}>
            <TitleText>{value}</TitleText>
            <ContentText>{this.props.contentData[arrayNumber][index]}</ContentText>
          </WrapperContent>
        </>
      );
    });
  }

  processGrid = (data: string[][]) => {
    return data.map((value, index) => {
      return (
        <>
          <WrapperSection key={index}>
            {this.renderContent(value, index)}
          </WrapperSection>
          <WrapperLine isVertical={false}>
            <DividedLine />
          </WrapperLine>
        </>
      );
    });
  }

  render() {
    const { titleData } = this.props;
    return (
      <Wrapper>
        {this.processGrid(titleData)}
      </Wrapper>
    );
  }
}
