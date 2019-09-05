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
  minYear?: number;
  maxYear?: number;
  isYearData?: boolean;
  selectedValue: any;
  selectedYear?: any;
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
    const { onCancel, isVisible, title, isYearData, minYear, maxYear, navigation } = this.props;

    const displayPickItem = () => {
      const options = [];
      if (isYearData) {
        for (let i = minYear as number; i < (maxYear as number); i++) {
          options.push(<PickerItem key={i} label={`${i}`} value={i}/>);
        }
      } else {
        Object.keys(monthNamesShort).map((objectkey, index) => {
          const name = monthNamesShort[objectkey];
          options.push(<PickerItem key={index} label={name} value={name} />);
        });
      }
      return options;
    };

    const handleSubmit = () => {
      if (isYearData === true) {
        let datePicked: string | undefined = `${this.state.selectedValue}-01-01`;
        if (this.state.selectedValue === moment().year()) datePicked = undefined;
        navigation.push(RouteName.CALENDAR, {
          selectedYear: this.state.selectedValue,
          datePicked,
        });
        onCancel();
      } else if (isYearData === false) {
        const month = reverseMonthNamesShort[this.state.selectedValue];
        const datePicked: string = `${this.props.selectedYear}-${month}-05`;
        navigation.push(
          RouteName.CALENDAR,
          {
            selectedYear: this.props.selectedYear,
            datePicked,
          },
        );
        onCancel();
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
