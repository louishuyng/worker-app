import React, { Component } from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp } from 'react-navigation';
import Modal from 'react-native-modal';
import { Picker, Platform } from 'react-native';
import moment from 'moment';
import PickerAndroid from './PickerAndroid';

import { convertWidth, convertHeight } from 'utils/convertSize';
import { RouteName } from 'constant';
import { monthNamesShort, reverseMonthNamesShort } from '../config';

const CustomerPicker = Platform.OS === 'ios' ? Picker : PickerAndroid;
const PickerItem = CustomerPicker.Item;

const Container = styled.View`
  background-color: white;
  border-radius: ${convertWidth(2)};
  display: flex;
`;

const Header = styled.View`
  justify-content: center;
  height: ${convertHeight(52)};
  padding-horizontal: ${convertWidth(10)};
`;

const Body = styled.View`
  justify-content: center;
  align-items: center;
  height: ${Platform.OS === 'android' ? convertHeight(250) : 'auto'};
`;

const Footer = styled.View`
  flex-direction: row;
  height: ${convertHeight(52)};
`;

const WrapperButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.paleGray};
`;

const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${convertWidth(16)};
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.cerulean};
  font-size: ${convertWidth(20)};
`;

const LineHeader = styled.View`
  height: ${convertHeight(3)};
  background: ${({ theme }) => theme.colors.cerulean};
`;

interface State {
  selectedValue: any;
};

interface Props {
  navigation: NavigationScreenProp<any>;
  onCancel: Function;
  isVisible: boolean;
  title: String;
  isYearData?: boolean;
  selectedValue: any;
  datePicked?: any;
  options: any;
}

export default class CustomPickDate extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedValue: 0,
    };
  }

  componentDidMount() {
    this.setState({
      selectedValue: this.props.selectedValue,
    });
  }

  render() {
    const { onCancel, isVisible, title, isYearData, navigation, options } = this.props;

    const displayPickItem = () => {
      if (isYearData) {
        return Object.values(options).map((value: any, index:any) => {
          return (
            <PickerItem key={index} label={value.name} value={value.name}/>
          );
        });
      } else {
        return Object.keys(monthNamesShort).map((objectkey, index) => {
          const name = monthNamesShort[objectkey];
          return (<PickerItem key={index} label={name} value={name} />);
        });
      }
    };

    const handleSubmit = () => {
      onCancel();
      let callbackFunc = null;
      if (isYearData === true) {
        const callbackFunc = () => {
          let datePicked: string | undefined = `${this.state.selectedValue}-01-01`;
          if (this.state.selectedValue === moment().year()) datePicked = undefined;
          navigation.navigate(
            RouteName.CALENDAR, {
              selectedYear: this.state.selectedValue,
              datePicked,
            }, this.state.selectedValue
          );
        };
        onCancel(callbackFunc, true);
      } else if (isYearData === false) {
        callbackFunc = () => {
          const month = reverseMonthNamesShort[this.state.selectedValue];
          navigation.navigate(
            RouteName.AGENDA,
            {
              data: {
                month,
                datePicked: this.props.datePicked,
              },
            }, this.state.selectedValue
          );
        };
        onCancel(callbackFunc, true);
      }
    };

    return (
      <Modal
        isVisible={isVisible}
        animationIn='fadeIn'
        animationOut='fadeOut'
        backdropTransitionOutTiming={0}
      >
        <Container>
          <Header>
            <Title>
              {title}
            </Title>
          </Header>
          <LineHeader />
          <Body>
            <CustomerPicker
              style={{ width: '30%' }}
              selectedValue={this.state.selectedValue}
              onValueChange={(itemValue: any) => {
                this.setState({ selectedValue: itemValue });
              }}
            >
              {displayPickItem()}
            </CustomerPicker>
          </Body>
          <Footer>
            <WrapperButton onPress={() => onCancel()}>
              <TextButton>
                Cancel
              </TextButton>
            </WrapperButton>
            <WrapperButton onPress={() => handleSubmit()}>
              <TextButton>
                OK
              </TextButton>
            </WrapperButton>
          </Footer>
        </Container>
      </Modal>
    );
  }
};
