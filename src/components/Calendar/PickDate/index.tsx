import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { NavigationScreenProp } from 'react-navigation';

import { Types } from 'components/common/Button/types';
import { ButtonUI } from 'components/common';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { RouteName } from 'constant';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WrapperButton = styled.View`
  width: ${convertWidth(260)};
  height: ${convertHeight(39)};
  margin-vertical: ${convertHeight(8)};
`;

interface State {
  isDateTimePickerVisible: boolean;
};

interface Props {
  navigation: NavigationScreenProp<any>;
}

export default class DatePicker extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date: Date) => {
    const { navigation } = this.props;
    navigation.navigate(RouteName.CALENDAR, {
      datePicked: moment(date.toISOString()).format('YYYY-MM-DD'),
    });
    this.hideDateTimePicker();
  };

  render() {
    return (
      <Container>
        <WrapperButton>
          <ButtonUI
            type={Types.SETSTATUS}
            title="Move to current date"
            onPress={() => {
              this.props.navigation.navigate(RouteName.CALENDAR, {
                datePicked: moment().format('YYYY-MM-DD'),
              });
            }}
          />
        </WrapperButton>
        <WrapperButton>
          <ButtonUI
            type={Types.SETSTATUS}
            title="Choose another date"
            onPress={this.showDateTimePicker}
          />
        </WrapperButton>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </Container>
    );
  }
};
