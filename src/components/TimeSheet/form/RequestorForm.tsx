import React from 'react';
import styled from 'styled-components/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Field } from 'formik';

import { InputAuthData } from 'components/Auth/models/authScreenConfig';
import { TextInputFormikUI } from 'components/common';
import { convertWidth } from 'utils/convertSize';
import TextInputFormikHourUI from 'components/common/TextInputFormikHour';
import { formatTime } from '../config/formatTime';
import { date } from 'yup';

const WrapperForm = styled.View``;

const WrapperFormInline = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const WrapperField = styled.TouchableOpacity`
  width: ${convertWidth(168)};
`;

export enum TypeDateInput {
  DATE = 'dateRequested',
  TIME = 'timeRequested',
}

type modeTimePicker = 'date' | 'time';
interface Props {
  data: Array<InputAuthData>
  setFieldValue?: (fieldName: string, data: string) => void;
}

interface State {
  isDateTimePickerVisible: boolean;
  currentFieldName: string | undefined;
  modeTimePicker: modeTimePicker;
}

export default class RequestorForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentFieldName: undefined,
      isDateTimePickerVisible: false,
      modeTimePicker: 'time',
    };
  }

  hideDateTimePicker = () => {
    this.setState({ ...this.state, isDateTimePickerVisible: false });
  }

  handleDatePicked = (dateData: Date, currentFieldName: string) => {
    const { setFieldValue } = this.props;
    const time = formatTime(dateData, currentFieldName as TypeDateInput);

    this.hideDateTimePicker();
    setFieldValue && setFieldValue(currentFieldName, time);
  }

  render() {
    const { data } = this.props;
    return (
      <>
        <WrapperForm>
          <Field
            type={data[0].type}
            component={TextInputFormikUI}
            name={data[0].fieldName}
            placeholder={data[0].placeholder}
            label={data[0].label}
          />
        </WrapperForm>
        <WrapperFormInline>
          <WrapperField onPress={() => this.setState({
            ...this.state,
            modeTimePicker: 'date',
            currentFieldName: TypeDateInput.DATE,
            isDateTimePickerVisible: true,
          })}>
            <Field
              type={data[1].type}
              component={TextInputFormikHourUI}
              name={data[1].fieldName}
              isHideKeyboard={true}
              placeholder={data[1].placeholder}
              label={data[1].label}
            />
          </WrapperField>
          <WrapperField onPress={() => this.setState({
            ...this.state,
            modeTimePicker: 'time',
            currentFieldName: TypeDateInput.TIME,
            isDateTimePickerVisible: true,
          })}>
            <Field
              type={data[2].type}
              component={TextInputFormikHourUI}
              name={data[2].fieldName}
              isHideKeyboard={true}
              placeholder={data[2].placeholder}
              label={data[2].label}
            />
          </WrapperField>
        </WrapperFormInline>
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
