import React from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';

import HeaderCalendar from '../shared';
import { colors, fontFamily } from 'utils/Theme';
import { RouteName } from 'constant';
import BackButtonUI from 'components/common/ButtonBack';
import { convertWidth } from 'utils/convertSize';

interface Props {}

interface State {}

const SafeAreaView = styled.SafeAreaView``;

export default class Agenda extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = (
    { navigation }: {navigation: NavigationScreenProp<any>
  }): NavigationStackScreenOptions => {
    const { getParam } = navigation;
    const monthName = navigation.getParam('month');
    return {
      title: RouteName.CALENDAR,
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTitleStyle: {
        color: colors.black,
        fontSize: convertWidth(17),
        fontFamily: fontFamily.medium,
      },
      headerLeft: <BackButtonUI label={monthName} onPress={() => navigation.pop()}/>,
      headerTintColor: colors.mineShaft,
    };
  }

  render() {
    return (
      <SafeAreaView>
        <HeaderCalendar />
      </SafeAreaView>
    );
  }
}