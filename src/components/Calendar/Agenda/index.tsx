import React, { lazy, Suspense } from 'react';
import styled from 'styled-components/native';
import { NavigationScreenProp, NavigationStackScreenOptions } from 'react-navigation';

import HeaderCalendar from '../shared';
import { colors, fontFamily } from 'utils/Theme';
import { RouteName } from 'constant';
import BackButtonUI from 'components/common/ButtonBack';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { View } from 'react-native';
import { screenHeight } from 'utils/Styles';
import CustomPickDate from '../PickDate';
import { monthNamesShort } from '../config';
import { LoadingSpine } from 'components/common';

const ListAgenda = lazy(() => import('./ListAgenda'));

interface Props { navigation: NavigationScreenProp<any>; }

interface State { isShowModelMonth: boolean; isLoading: boolean; }

const LoadingSpineWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default class Agenda extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowModelMonth: false,
      isLoading: false,
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
      headerLeft: <BackButtonUI label={monthNamesShort[monthName]} navigation={navigation} />,
      headerTintColor: colors.mineShaft,
    };
  }

  render() {
    const { navigation: { getParam } } = this.props;
    const selectedMonth = getParam('data').month;
    const datePicked = getParam('data').datePicked;

    const handleOnCancel = (callback: any = undefined, isLoading = false) => {
      if (callback) {
        setTimeout(() => {
          callback();
          this.setState({
            isLoading: false,
          });
        }, 1000);
      }
      this.setState({
        isShowModelMonth: false,
        isLoading,
      });
    };

    return (
      <View style={{ height: screenHeight, paddingBottom: convertHeight(180) }}>
        <HeaderCalendar datePicked={getParam('data').datePicked} isShowController />
        <CustomPickDate
          navigation={this.props.navigation}
          selectedValue={monthNamesShort[selectedMonth as string]}
          datePicked={datePicked}
          isYearData={false}
          title={'Select month'}
          isVisible={this.state.isShowModelMonth}
          onCancel={(callback: any, isLoading: boolean) => handleOnCancel(callback, isLoading)}
        />
        {this.state.isLoading ? (
          <LoadingSpineWrapper>
            <LoadingSpine/>
          </LoadingSpineWrapper>
        ) : (
          <Suspense fallback={
            <LoadingSpineWrapper>
              <LoadingSpine />
            </LoadingSpineWrapper>
          }>
            <ListAgenda navigation={this.props.navigation} data={getParam('data')}/>
          </Suspense>
        )}
      </View>
    );
  }
}
