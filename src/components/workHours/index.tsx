import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styled from 'styled-components/native';
import { Field } from 'formik';
import moment from 'moment';

import { TextInputFormikUI, ButtonUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { screenHeight } from 'utils/Styles';
import { getString } from 'locales';
import { TimeFormat } from './type';
import { mockDataWorkHours } from './mock';
import { isValidDate } from './helper';

const Container = styled.View`
  flex: 1;
  padding-horizontal: 5%;
  padding-vertical: 2%;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.aquaHaze};
`;

const WrapperGroupInput = styled.ScrollView`
  max-height: ${screenHeight / 1.8};
`;

const WrapperTextInput = styled.View`
  flex-direction: row;
`;

const TextInputStyled = styled.TouchableOpacity`
  flex: 1;
  padding-horizontal: 1%;
`;

const WrapperBody = styled.View``;

const WrapperButton = styled.View`
  width: 43%;
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
    const hour = moment(date).hour().toString();
    const minute = moment(date).minute().toString();

    const cloneDate = [...this.state.date];
    if (currentInput.timeMark === TimeMark.FROM) {
      if (currentInput.index > 0) {
        if (!isValidDate(cloneDate[currentInput.index - 1].end, {
          hour,
          minute,
        })) {
          Alert.alert('You can not set time, please try again!');
          return null;
        }
      }
      cloneDate[currentInput.index].begin = {
        hour,
        minute,
      };
    }
    if (currentInput.timeMark === TimeMark.TO) {
      if (cloneDate[currentInput.index].begin.hour === '') {
        Alert.alert('You need to set time for from field first!');
        return null;
      }

      if (!isValidDate(cloneDate[currentInput.index].begin, {
        hour,
        minute,
      })) {
        Alert.alert('You can not set time, please try again!');
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
    const lastFrom = this.state.date[this.state.date.length - 1];
    if (lastFrom.begin.hour !== '' && lastFrom.end.hour !== '') {
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
      return (
        <WrapperTextInput key={i}>
          <TextInputStyled onPress={() => {
            this.showDateTimePicker({
              timeMark: TimeMark.FROM,
              index: i,
            });
          }} >
            <Field
              name={`from${i}`}
              label={getString('workHours', 'from')}
              value={item.begin}
              isHideKeyboard={true}
              component={TextInputFormikUI}
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
              value={item.end}
              isHideKeyboard={true}
              component={TextInputFormikUI}
            />
          </TextInputStyled>
        </WrapperTextInput >
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
            <WrapperButton>
              <ButtonUI
                onPress={this.handleAddHours}
                title={getString('workHours', 'add')}
                type={Types.ADD}
              />
            </WrapperButton>
          </WrapperBody>
          <ButtonUI
            onPress={() => null}
            title={getString('workHours', 'save')}
            type={Types.SUBMIT}
          />
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
