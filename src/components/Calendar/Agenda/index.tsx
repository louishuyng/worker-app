import React from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';

import HeaderCalendar from '../shared';
import { colors, fontFamily } from 'utils/Theme';
import { RouteName } from 'constant';
import BackButtonUI from 'components/common/ButtonBack';
import { convertWidth } from 'utils/convertSize';
import ListAgenda from './ListAgenda';
import { getDateOfWeek } from 'utils/getDateOfWeek';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State { }

const SafeAreaView = styled.SafeAreaView``;

export default class Agenda extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = (
    { navigation }: {
      navigation: NavigationScreenProp<any>
    }): NavigationStackScreenOptions => {
    const { getParam } = navigation;
    const monthName = getParam('month');
    return {
      title: RouteName.CALENDAR,
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTitleStyle: {
        color: colors.black,
        fontSize: convertWidth(17),
        width: '75%',
        textAlign: 'center',
        fontFamily: fontFamily.medium,
      },
      headerLeft: <BackButtonUI label={monthName} onPress={() => navigation.pop()} />,
      headerTintColor: colors.mineShaft,
    };
  }

  render() {
    return (
      <SafeAreaView>
        <HeaderCalendar datePicked={this.props.navigation.getParam('datePicked')} isShowController />
        <ListAgenda />
      </SafeAreaView>
    );
  }
}
