import React from 'react';
import styled from 'styled-components/native';

import { convertHeight, convertWidth } from 'utils/convertSize';
import { weekDayShortNames } from '../config';
import { View, Animated, ScrollView } from 'react-native';
import { getDateOfWeek } from 'utils/getDateOfWeek';
import { AnimatedValue } from 'react-navigation';
import { screenWidth } from 'utils/Styles';

interface Props {
  isShowController?: boolean;
  datePicked: string;
}

interface State {
  animatedScroll: AnimatedValue;
  weekdays: number[][];
  currentOffset: number;
}

const WrapperHeaderWeek = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
  padding-horizontal: ${convertWidth(15)};
  height: ${convertHeight(39)};
  align-items: center;
`;

const TextDayHeader = styled.Text`
  text-align: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.paleSky};
  font-size: ${convertWidth(16)};
`;

export default class HeaderCalendar extends React.Component<Props, State> {
  private scrollViewEl: any;

  constructor(props: Props) {
    super(props);
    this.scrollViewEl = React.createRef();
    this.state = {
      animatedScroll: new Animated.Value(0),
      currentOffset: 1,
      weekdays: [
        getDateOfWeek(this.props.datePicked, -1),
        getDateOfWeek(this.props.datePicked, 0),
        getDateOfWeek(this.props.datePicked, 1),
      ],
    };
  }

  handleScroll = (event: any) => {
    const isDivisibleOffset = event.nativeEvent.contentOffset.x % screenWidth;
    const ratioOffset = event.nativeEvent.contentOffset.x / screenWidth;

    if (isDivisibleOffset === 0 && ratioOffset >= 2) {
      const currentOffset = event.nativeEvent.contentOffset.x / screenWidth;
      this.setState((state: State, props: Props) => {
        if (currentOffset <= state.currentOffset) {
          return { ...state };
        }
        return {
          ...state,
          currentNextOffset: currentOffset,
          weekdays: [
            ...state.weekdays,
            getDateOfWeek(props.datePicked, currentOffset),
          ],
        };
      });
    };
    if (isDivisibleOffset === 0 && ratioOffset <= 0) {
      this.setState((state: State, props: Props) => {
        return {
          ...state,
          weekdays: [
            getDateOfWeek(props.datePicked, 1 - state.weekdays.length),
            ...state.weekdays,
          ],
        };
      });
      this.scrollViewEl.current.scrollTo({ x: screenWidth, y: 0, animated: false });
    };
  }

  render() {
    return (
      <View>
        <WrapperHeaderWeek>
          {weekDayShortNames.map((day, id) => (
            <TextDayHeader
              allowFontScaling={false}
              accessible={false}
              numberOfLines={1}
              key={id}
              importantForAccessibility='no'
            >
              {day}
            </TextDayHeader>
          ))}
        </WrapperHeaderWeek>
        {
          this.props.isShowController && <View>
            <ScrollView
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              contentOffset={{ x: screenWidth, y: 0 }}
              onScroll={this.handleScroll}
              ref={this.scrollViewEl}
            >
              {
                this.state.weekdays.map((week, i) => {
                  return (
                    <WrapperHeaderWeek style={{ width: screenWidth }} key={i}>
                      {week.map((day, id) => (
                        <TextDayHeader
                          allowFontScaling={false}
                          accessible={false}
                          numberOfLines={1}
                          key={id}
                          importantForAccessibility='no'
                        >
                          {day}
                        </TextDayHeader>

                      ))}
                    </WrapperHeaderWeek>
                  );
                })
              }
            </ScrollView>
          </View>
        }
      </View>
    );
  }
}
