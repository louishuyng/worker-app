import React from 'react';
import styled from 'styled-components/native';
import { convertHeight, convertWidth } from 'utils/convertSize';

export const WrapperJobList = styled.ScrollView`
  flex: 1;
  padding-top: ${convertHeight(17)};
  padding-bottom: ${convertHeight(17)};
  padding-right: ${convertWidth(28)};
  padding-left: ${convertWidth(28)};
`;
