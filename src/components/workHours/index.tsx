import React, { Component } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styled from 'styled-components/native';
import { Field } from 'formik';

import { TextInputFormikUI, ButtonUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { screenHeight } from 'utils/Styles';
import { getString } from 'locales';
import { TimeWorkHourFormat } from './type';
import { mockDataWorkHours } from './mock';

const Container = styled.View`
  flex: 1;
  padding-horizontal: 5%;
  padding-vertical: 2%;
  justify-content: space-between;
`;

const WrapperGroupInput = styled.ScrollView`
  max-height: ${screenHeight / 1.8}
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

interface State {
  isDateTimePickerVisible: boolean;
  currentDate: any;
  data: Array<TimeWorkHourFormat>;
}

export default class WorkHoursComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      currentDate: null,
      data: mockDataWorkHours,
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date: Date) => {
    this.hideDateTimePicker();
  };

  handleAddHours = () => {

  };

  renderForm(workHours: any) {
    return workHours.map((item: TimeWorkHourFormat, i: number) => {
      return (
        <WrapperTextInput key={i}>
          <TextInputStyled onPress={() => this.showDateTimePicker()} >
            <Field
              name={item.fieldNameBegin}
              label={getString('workHours', 'from')}
              value={item.beginHour}
              isHideKeyboard={true}
              component={TextInputFormikUI}
            />
          </TextInputStyled>
          <TextInputStyled >
            <Field
              name={item.fieldNameEnd}
              label={getString('workHours', 'to')}
              value={item.beginMinute}
              isHideKeyboard={true}
              component={TextInputFormikUI}
            />
          </TextInputStyled>
        </WrapperTextInput>
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
                this.renderForm(this.state.data)
              }
            </WrapperGroupInput>
            <WrapperButton>
              <ButtonUI
                onPress={() => null}
                title={getString('workHours', 'add')}
                type={Types.ADD}
              />
            </WrapperButton>
          </WrapperBody>
          <ButtonUI
            onPress={() => this.showDateTimePicker()}
            title={getString('workHours', 'save')}
            type={Types.SUBMIT}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode="time"
          />
        </Container >
      </TouchableWithoutFeedback>
    );
  }
}
