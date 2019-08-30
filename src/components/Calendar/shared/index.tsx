import React from 'react';
import styled from 'styled-components/native';

import { convertHeight, convertWidth } from 'utils/convertSize';
import { weekDayShortNames } from '../config';
import { View, Animated, ScrollView, InteractionManager, Dimensions } from 'react-native';
import { getDateOfWeek } from 'utils/getDateOfWeek';
import { AnimatedValue } from 'react-navigation';
import { screenWidth, screenHeight } from 'utils/Styles';
import moment from 'moment';

const WrapperHeaderWeek = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
  height: ${convertHeight(39)};
  align-items: center;
  justify-content: space-around;
`;

const WrapperDay = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextDayHeader = styled.Text<{ isMarked: boolean }>`
  text-align: center;
  width: ${convertWidth(30)};
  height: ${convertWidth(30)};
  line-height: ${convertWidth(30)};
  border-radius: ${convertWidth(15)};
  background-color: ${({ isMarked, theme }) => isMarked ? theme.colors.cerulean : 'transparent'};
  color: ${({ isMarked, theme }) => isMarked ? theme.colors.white : theme.colors.paleSky};
  font-size: ${convertWidth(16)};

`;

interface Props {
  isShowController?: boolean;
  datePicked: string;
}

interface State {
  animatedScroll: AnimatedValue;
  weekdays: number[][];
  currentNextOffset: number;
  currentPreviousOffet: number;
  isPortrait: boolean;
}

export default class HaderCalendar extends React.Component<Props, State> {
  private scrollViewEl: any;

  constructor(props: Props) {
    super(props);
    this.scrollViewEl = React.createRef();
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.width <= dim.height;
    };
    this.state = {
      animatedScroll: new Animated.Value(0),
      currentNextOffset: 1,
      currentPreviousOffet: -1,
      isPortrait: isPortrait(),
      weekdays: [
        getDateOfWeek(this.props.datePicked, -1),
        getDateOfWeek(this.props.datePicked, 0),
        getDateOfWeek(this.props.datePicked, 1),
      ],
    };

    Dimensions.addEventListener('change', () => {
      this.setState({
        ...this.state,
        isPortrait: isPortrait(),
      });
    });
  }

  handleScroll = (event: any) => {
    const isDivisibleOffset = event.nativeEvent.contentOffset.x % screenWidth;
    const ratioOffset = event.nativeEvent.contentOffset.x / screenWidth;

    if (isDivisibleOffset === 0 && ratioOffset >= 2) {
      const currentOffset = event.nativeEvent.contentOffset.x / screenWidth;
      this.setState((state: State, props: Props) => {
        if (currentOffset <= state.currentNextOffset) {
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
    if (isDivisibleOffset === 0 && ratioOffset === 0) {
      this.setState((state: State, props: Props) => {
        return {
          ...state,
          currentPreviousOffet: state.currentPreviousOffet - 1,
          weekdays: [
            getDateOfWeek(props.datePicked, state.currentPreviousOffet - 1),
            ...state.weekdays,
          ],
        };
      });
      this.scrollViewEl.current.scrollTo({ x: screenWidth, y: 0, animated: false });
    };
  }

  componentDidMount() {
    this.scrollViewEl.current && InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        this.scrollViewEl.current.scrollTo({
          x: this.state.isPortrait ? screenWidth : screenHeight,
          y: 0,
          animated: false,
        });
      }, 1);
    });
  }

  render() {
    return (
      <View>
        <WrapperHeaderWeek>
          {weekDayShortNames.map((day, id) => (
            <WrapperDay key={id}>
              <TextDayHeader
                allowFontScaling={false}
                isMarked={false}
                accessible={false}
                numberOfLines={1}
                importantForAccessibility='no'
              >
                {day}
              </TextDayHeader>
            </WrapperDay>
          ))}
        </WrapperHeaderWeek>
        {
          this.props.isShowController &&
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            contentOffset={{ x: this.state.isPortrait ? screenWidth : screenHeight, y: 0 }}
            onScroll={this.handleScroll}
            ref={this.scrollViewEl}
            style={{ width: '100%' }}
          >
            {
              this.state.weekdays.map((week, i) => {
                return (
                  <WrapperHeaderWeek style={{ width: this.state.isPortrait ? screenWidth : screenHeight }} key={i}>
                    {week.map((day, id) => {
                      const weekDay = moment(this.props.datePicked).isoWeekday();
                      return (
                        <WrapperDay key={id}>
                          <TextDayHeader
                            isMarked={weekDay === id + 1}
                            allowFontScaling={false}
                            accessible={false}
                            numberOfLines={1}
                            importantForAccessibility='no'
                          >
                            {day}
                          </TextDayHeader>
                        </WrapperDay>
                      );
                    })}
                  </WrapperHeaderWeek>
                );
              })
            }
          </ScrollView>
        }
      </View>
    );
  }
}
