import React from 'react';
import styled, { css } from 'styled-components/native';

import { convertWidth } from 'utils/convertSize';
import { RouteName } from 'constant';
import { NavigationScreenProp } from 'react-navigation';
import moment from 'moment';

interface Props {
  currentDate: string;
  date: any;
  state?: any;
  marking: any;
  navigation: NavigationScreenProp<any>;
}

interface State {}

const WrapperDay = styled.TouchableOpacity<{isCurrentDate: boolean}>`
  width: ${convertWidth(38)};
  height: ${convertWidth(38)};
  border-radius: ${convertWidth(19)};
  justify-content: center;
  align-items: center;
  ${({ isCurrentDate, theme }) => {
    if (isCurrentDate) {
      return css`
        position: relative;
        background-color: rgba(0, 154, 218, 0.1);
    `;
    }
  }}
`;

const TextDay = styled.Text<{isWeekend: boolean}>`
  font-size: ${convertWidth(16)};
  opacity: 1;
  ${({ theme, isWeekend }) => {
    if (isWeekend) {
      return css`
        color: ${theme.colors.silver}; 
    `;
    }
  }} 
`;

const WrapperDot = styled.View`
  flex-direction: row;
`;

const DotsView = styled.View`
  width: 4;
  height: 4;
  margin-top: 1;
  margin-left: 1;
  margin-right: 1;
  border-radius: 2;
  background-color: ${({ theme }) => theme.colors.cerulean};
`;

export default class DayComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

   renderDots = (marking: any) => {
     if (marking.dots && Array.isArray(marking.dots) && marking.dots.length > 0) {
       return marking.dots.map((dot: any, index: any) => {
         return (
           <DotsView key={dot.key ? dot.key : index} />
         );
       });
     }
   }

   render() {
     const { date, marking, currentDate, navigation: { navigate } } = this.props;
     const currentDateStage = new Date(date.timestamp);
     const isWeekend = currentDateStage.getDay() === 6 || currentDateStage.getDay() === 0;
     const isCurrentDate = date.dateString === currentDate;

     return (
       <WrapperDay
         isCurrentDate={isCurrentDate}
         onPress={() => navigate(RouteName.AGENDA, {
           month: moment(date.month, 'MM').format('MMMM'),
         })}
       >
         <TextDay isWeekend={isWeekend}>
           {date.day}
         </TextDay>
         <WrapperDot>
           {this.renderDots(marking)}
         </WrapperDot>
       </WrapperDay>
     );
   }
}
