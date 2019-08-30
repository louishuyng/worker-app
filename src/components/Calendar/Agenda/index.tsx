import React from 'react';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';

import HeaderCalendar from '../shared';
import { colors, fontFamily } from 'utils/Theme';
import { RouteName } from 'constant';
import BackButtonUI from 'components/common/ButtonBack';
import { convertWidth, convertHeight } from 'utils/convertSize';
import ListAgenda from './ListAgenda';
import { View } from 'react-native';
import { screenHeight } from 'utils/Styles';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State { }

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
    const monthName = getParam('data').month;
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
      headerLeft: <BackButtonUI label={monthName} navigation={navigation} />,
      headerTintColor: colors.mineShaft,
    };
  }

  render() {
    const { navigation: { getParam } } = this.props;
    return (
      <View style={{ height: screenHeight, paddingBottom: convertHeight(180) }}>
        <HeaderCalendar datePicked={getParam('data').datePicked} isShowController />
        <ListAgenda navigation={this.props.navigation} data={getParam('data')}/>
      </View>
    );
  }
}
