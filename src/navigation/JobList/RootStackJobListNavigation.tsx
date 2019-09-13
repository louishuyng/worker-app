import React from 'react';
import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
  NavigationScreenProp } from 'react-navigation';

import JobList from 'components/JobList';
import { RouteName } from 'constant';
import {
  IC_JOBLIST_ACTIVE,
  IC_JOBLIST_UN_ACTIVE,
  JOB_LIST_NOTIFICATION,
  JOB_LIST_UNACTICE_NOTIFICATION,
} from 'utils/Icons';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';
import JobDetail from 'components/JobDetail';
import { colors } from 'utils/Theme';
import BackButtonUI from 'components/common/ButtonBack';
import { CreateReviewSheetScreen, CreateTimeSheetScreen } from 'screens/TimeSheet';
import MapViewComponent from 'components/MapView';
import SignaturePadUI from 'components/Signature';
import HeadRightNav from 'components/Signature/HeadRightNav';
import { SignTimeSheetScreen } from 'screens/SignTimeSheet';
import { WorkHoursScreen } from 'screens/WorkHours';

const routeConfig: NavigationRouteConfig = {
  [RouteName.JOB_LIST]: {
    screen: JobList,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ screenProps, navigation }),
  },
  [RouteName.JOB]: {
    screen: JobDetail,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      headLeftComponent: <BackButtonUI navigation={navigation} />,
      widthTitle: '75%',
    }),
  },
  [RouteName.CREATE_TIMESHEET]: {
    screen: CreateTimeSheetScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      headLeftComponent: <BackButtonUI navigation={navigation} />,
      widthTitle: '75%',
    }),
  },
  [RouteName.REVIEW_TIMESHEET]: {
    screen: CreateReviewSheetScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      headLeftComponent: <BackButtonUI navigation={navigation} />,
      widthTitle: '75%',
    }),
  },
  [RouteName.MAPVIEW]: {
    screen: MapViewComponent,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      screenProps,
      navigation,
      colorHeader: colors.auqaHazeTwo,
      headLeftComponent: <BackButtonUI navigation={navigation} />,
      widthTitle: '75%',
    }),
  },
  [RouteName.SIGNATURE]: {
    screen: SignaturePadUI,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      navigation,
      screenProps,
      headLeftComponent: <BackButtonUI navigation={navigation} />,
      headRightComponent: <HeadRightNav navigation={navigation} />,
      colorHeader: screenProps.theme.colors.auqaHazeTwo,
      widthTitle: '75%',
    }),
  },
  [RouteName.SIGN_TIME_SHEET]: {
    screen: SignTimeSheetScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      navigation,
      screenProps,
      headLeftComponent: <BackButtonUI navigation={navigation} />,
      colorHeader: screenProps.theme.colors.auqaHazeTwo,
      widthTitle: '75%',
    }),
  },
  [RouteName.WORK_HOURS_JOB_LIST]: {
    screen: WorkHoursScreen,
    navigationOptions: (
      { navigation, screenProps }: { navigation: NavigationScreenProp<any>, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({
      navigation,
      screenProps,
      headLeftComponent: <BackButtonUI navigation={navigation}/>,
      widthTitle: '75%',
    }),
  },
};
const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  initialRouteName: RouteName.JOB_LIST,
  activeIcon: JOB_LIST_NOTIFICATION,
  unActiveIcon: JOB_LIST_UNACTICE_NOTIFICATION,
});

export default createStackNavigator(routeConfig, navigatorConfig);
