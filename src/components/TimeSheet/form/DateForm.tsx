
import React from 'react';
import styled from 'styled-components/native';
import { Field } from 'formik';
import moment from 'moment';
import { Alert, Platform } from 'react-native';

import { InputAuthData } from 'components/Auth/models/authScreenConfig';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TextInputFormikHourUI from 'components/common/TextInputFormikHour';
import { formatTime } from '../config/formatTime';
import { TypeDateInput } from './RequestorForm';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

const WrapperField = styled.TouchableOpacity`
  width: 50%;
  padding-horizontal: 3%;
`;

const mockData: any[] = ['', '', '', ''];

type modeTimePicker = 'date' | 'time';

interface State {
  isDateTimePickerVisible: boolean;
  currentFieldName: string | undefined;
  currentInput: number;
  modeTimePicker: modeTimePicker;
  dateData: any;
}

interface Props {
  data: Array<InputAuthData>
  setFieldValue?: (fieldName: string, data: string) => void;
}

export default class DateForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      currentFieldName: undefined,
      currentInput: 0,
      modeTimePicker: 'time',
      dateData: mockData,
    };
  }

  showDateTimePicker = (indexInput: number, currentFieldName: string) => {
    this.setState({
      ...this.state,
      modeTimePicker: indexInput % 2 === 0 ? 'date' : 'time',
      currentFieldName: currentFieldName,
      currentInput: indexInput,
      isDateTimePickerVisible: true,
    });
  };

  hideDateTimePicker = () => {
    this.setState({ ...this.state, isDateTimePickerVisible: false });
  };

  validateTime = (timeData: string[], currentInput: number) => {
    if (currentInput !== 0 && timeData[currentInput - 1] === '') {
      Alert.alert('You can not set time to this field.');
      Platform.OS === 'android' && this.setState({
        ...this.state,
        isDateTimePickerVisible: false,
      });
      timeData[currentInput] = '';
      return null;
    }

    if (timeData[2] !== '' && moment(timeData[2]).isBefore(timeData[0])) {
      Alert.alert('The finish date must be greater than the start date.');
      Platform.OS === 'android' && this.setState({
        ...this.state,
        isDateTimePickerVisible: false,
      });
      timeData[currentInput] = '';
      return null;
    }
    if (timeData[0] === timeData[2] && timeData[1] !== '') {
      const beginHour = moment(timeData[1], 'h:mma');
      const endHour = moment(timeData[3], 'h:mma');

      if (beginHour.isAfter(endHour)) {
        Alert.alert('The finish time must be greater than the start time.');
        Platform.OS === 'android' && this.setState({
          ...this.state,
          isDateTimePickerVisible: false,
        });
        timeData[currentInput] = '';
        return null;
      }
    }
    this.setState({
      ...this.state,
      isDateTimePickerVisible: false,
      dateData: timeData,
    });
  }

  handleDatePicked = (dateData: Date, fieldName: string) => {
    const { currentInput } = this.state;
    const { setFieldValue } = this.props;
    const cloneDate = [...this.state.dateData];

    if (currentInput % 2 === 0) {
      cloneDate[currentInput] = formatTime(dateData, TypeDateInput.DATE);
    } else {
      cloneDate[currentInput] = formatTime(dateData, TypeDateInput.TIME);
    }

    this.validateTime(cloneDate, currentInput);

    setFieldValue && setFieldValue(fieldName, cloneDate[currentInput]);
  };

  render() {
    const { data } = this.props;
    const renderForm = (data: Array<InputAuthData>) => {
      return data.map((value, index) => {
        const { fieldName, label, placeholder, type } = value;
        return (
          <WrapperField key={index} onPress={() => this.showDateTimePicker(index, fieldName)}>
            <Field
              type={type}
              value={this.state.dateData[index]}
              component={TextInputFormikHourUI}
              isHideKeyboard={true}
              name={fieldName}
              placeholder={placeholder}
              label={label}
            />
          </WrapperField>
        );
      });
    };

    return (
      <>
        <Container>
          {renderForm(data)}
        </Container>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={(date) => this.handleDatePicked(date, this.state.currentFieldName as string)}
          onCancel={this.hideDateTimePicker}
          mode={this.state.modeTimePicker}
        />
      </>
    );
  }
}
