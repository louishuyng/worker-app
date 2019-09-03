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
import CustomPickDate from '../PickDate';
import { monthNamesShort } from '../config';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {
  isShowModelMonth: boolean;
}

export default class Agenda extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowModelMonth: false,
    };

    this.props.navigation.setParams({ onPress: () => this.setState({
      isShowModelMonth: true,
    }),
    });
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
    const selectedMonth = getParam('data').month;
    const selectedYear = getParam('data').selectedYear;
    return (
      <View style={{ height: screenHeight, paddingBottom: convertHeight(180) }}>
        <HeaderCalendar datePicked={getParam('data').datePicked} isShowController />
        <CustomPickDate
          navigation={this.props.navigation}
          selectedValue={monthNamesShort[selectedMonth as string]}
          selectedYear={selectedYear}
          isYearData={false}
          title={'Select month'}
          isVisible={this.state.isShowModelMonth}
          onCancel={() => this.setState({ isShowModelMonth: false })}
        />
        <ListAgenda navigation={this.props.navigation} data={getParam('data')}/>
      </View>
    );
  }
}
