import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback, Alert, View, Platform } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styled from 'styled-components/native';
import { Field } from 'formik';
import moment from 'moment';
import Swipeout, { SwipeoutProperties } from 'react-native-swipeout';

import { TextInputFormikHour, ButtonUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { screenHeight } from 'utils/Styles';
import { getString } from 'locales';
import { TimeFormat } from './type';
import { mockDataWorkHours } from './mock';
import { isValidDate, TimeDefined } from './helper';
import { convertHeight, convertWidth } from 'utils/convertSize';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.aquaHaze};
`;

const WrapperGroupInput = styled.ScrollView`
  max-height: ${screenHeight / 1.8};
`;

const WrapperTextInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const TextInputStyled = styled.TouchableOpacity`
  width: ${convertWidth(160)};
`;

const WrapperBody = styled.View``;

const WrapperButton = styled.View`
  width: 43%;
  height: ${convertHeight(39)};
  padding-horizontal: 5%;
  align-self: flex-end;
`;

interface Props {
}

enum TimeMark {
  FROM,
  TO,
}

interface CurrentInput {
  index: number;
  timeMark: TimeMark;
}
interface State {
  isDateTimePickerVisible: boolean;
  currentDate: any;
  currentInput: CurrentInput | undefined;
  date: TimeFormat[];
}

export default class WorkHoursComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      currentDate: null,
      currentInput: undefined,
      date: mockDataWorkHours,
    };
  }

  showDateTimePicker = (currentInput: any) => {
    this.setState({
      ...this.state,
      currentInput,
      isDateTimePickerVisible: true,
    });
  };

  hideDateTimePicker = () => {
    this.setState({ ...this.state, isDateTimePickerVisible: false });
  };

  handleDatePicked = (date: Date, currentInput: CurrentInput) => {
    const hour = moment(date).hour().toString().length === 1
      ? '0' + moment(date).hour() : moment(date).hour().toString();
    const minute = moment(date).minute().toString().length === 1
      ? '0' + moment(date).minute() : moment(date).minute().toString();

    const cloneDate = [...this.state.date];
    if (currentInput.timeMark === TimeMark.FROM) {
      if (currentInput.index > 0) {
        if (!isValidDate(cloneDate[currentInput.index - 1].end as TimeDefined, {
          hour,
          minute,
        })) {
          Alert.alert(getString('auth', 'TITLE_ERROR'), 'Please select a valid work hours');
          Platform.OS === 'android' && this.setState({
            ...this.state,
            isDateTimePickerVisible: false,
          });
          return null;
        }
      }

      if (cloneDate[currentInput.index].end.hour !== '' &&
        !isValidDate({ hour, minute }, cloneDate[currentInput.index].end as TimeDefined)
      ) {
        Alert.alert(getString('auth', 'TITLE_ERROR'), 'Please select a valid work hours');
        Platform.OS === 'android' && this.setState({
          ...this.state,
          isDateTimePickerVisible: false,
        });
        return null;
      }

      cloneDate[currentInput.index].begin = {
        hour,
        minute,
      };
    }

    if (currentInput.timeMark === TimeMark.TO) {
      if (cloneDate[currentInput.index].begin.hour === '') {
        Alert.alert(getString('auth', 'TITLE_ERROR'), 'You need to set time for from field first!');
        Platform.OS === 'android' && this.setState({
          ...this.state,
          isDateTimePickerVisible: false,
        });
        return null;
      }
      if (!isValidDate(cloneDate[currentInput.index].begin as TimeDefined, {
        hour,
        minute,
      })) {
        Alert.alert(getString('auth', 'TITLE_ERROR'), 'Please select a valid work hours');
        Platform.OS === 'android' && this.setState({
          ...this.state,
          isDateTimePickerVisible: false,
        });
        return null;
      }

      if (cloneDate[currentInput.index + 1] &&
        cloneDate[currentInput.index + 1].begin.hour !== '' &&
        !isValidDate({
          hour,
          minute,
        }, cloneDate[currentInput.index + 1].begin as TimeDefined)) {
        Alert.alert(getString('auth', 'TITLE_ERROR'), 'Please select a valid work hours');
        Platform.OS === 'android' && this.setState({
          ...this.state,
          isDateTimePickerVisible: false,
        });
        return null;
      }
      cloneDate[currentInput.index].end = {
        hour,
        minute,
      };
    }

    this.setState({
      ...this.state,
      isDateTimePickerVisible: false,
      date: cloneDate,
    });
  };

  handleAddHours = () => {
    const lastFrom = this.state.date[this.state.date.length - 1] || undefined;
    const isValid = lastFrom === undefined || (lastFrom.begin.hour !== '' && lastFrom.end.hour !== '');
    if (isValid) {
      this.setState({
        ...this.state,
        date: this.state.date.concat({
          begin: {
            hour: '',
            minute: '',
          },
          end: {
            hour: '',
            minute: '',
          },
        }),
      });
    }
  };

  renderForm(workHours: any) {
    return workHours.map((item: TimeFormat, i: number) => {
      const swipeSettings: SwipeoutProperties = {
        autoClose: true,
        right: [
          {
            onPress: () => {
              this.state.date.splice(i, 1);
              this.setState({
                ...this.state,
                date: this.state.date,
              });
            },
            text: 'Delete',
            type: 'delete',
          },
        ],
        rowId: i,
        sectionId: 1,
        style: {
          backgroundColor: 'transparent',
          paddingVertical: '2%',
        },
      };

      return (
        <Swipeout key={i} {...swipeSettings}>
          <WrapperTextInput style={{ paddingHorizontal: '5%' }} >
            <TextInputStyled onPressIn={() => {
              this.showDateTimePicker({
                timeMark: TimeMark.FROM,
                index: i,
              });
            }}>
              <Field
                name={`from${i}`}
                label={getString('workHours', 'from')}
                value={item.begin.hour !== '' &&
                item.begin.minute !== '' ? `${item.begin.hour}:${item.begin.minute}` : ''}
                isHideKeyboard={true}
                component={TextInputFormikHour}
              />
            </TextInputStyled>
            <TextInputStyled onPress={() => {
              this.showDateTimePicker({
                timeMark: TimeMark.TO,
                index: i,
              });
            }}>
              <Field
                name={`to${i}`}
                label={getString('workHours', 'to')}
                value={item.end.hour !== '' &&
                item.end.minute !== '' ? `${item.end.hour}:${item.end.minute}` : ''}
                isHideKeyboard={true}
                component={TextInputFormikHour}
              />
            </TextInputStyled>
          </WrapperTextInput >
        </Swipeout>
      );
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container >
          <WrapperBody>
            <WrapperGroupInput showsVerticalScrollIndicator={false}>
              {
                this.renderForm(this.state.date)
              }
            </WrapperGroupInput>
            <View style={{ height: convertHeight(20) }}/>
            <WrapperButton>
              <ButtonUI
                onPress={this.handleAddHours}
                title={getString('workHours', 'add')}
                type={Types.ADD}
              />
            </WrapperButton>
          </WrapperBody>
          <View style={{ paddingVertical: '5%', paddingHorizontal: '5%' }}>
            <View style={{ height: convertHeight(56) }}>
              <ButtonUI
                onPress={() => null}
                title={getString('workHours', 'save')}
                type={Types.SUBMIT}
              />
            </View>
          </View>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={(date) => this.handleDatePicked(date, this.state.currentInput as CurrentInput)}
            onCancel={this.hideDateTimePicker}
            mode="time"
          />
        </Container >
      </TouchableWithoutFeedback>
    );
  }
}
