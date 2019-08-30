import React from 'react';
import styled from 'styled-components/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { NavigationScreenProp } from 'react-navigation';
import { RouteName } from 'constant';

const Wrapper = styled.View`
  background: ${({ theme }) => theme.colors.aquaHaze};
  height: 100%;
  justify-content: center;
`;

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {
  isModalVisible: boolean;
}

export default class CalendarMain extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isModalVisible: true,
    };
  }

  componentDidMount() {
    console.log('hello');
    this.setState({
      isModalVisible: true,
    });
  }

  render() {
    const hanldleCancel = () => {
      this.setState({
        isModalVisible: false,
      });
      this.props.navigation.navigate(RouteName.JOB_LIST);
    };

    return (
      <Wrapper>
        <DateTimePicker
          isVisible={this.state.isModalVisible}
          mode="date"
          onCancel={() => hanldleCancel()}
        />
      </Wrapper>
    );
  }
}
