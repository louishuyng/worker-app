import {
  createStackNavigator,
  NavigationRouteConfig,
  StackNavigatorConfig,
} from 'react-navigation';

import { CalendarList, Agenda } from 'components/Calendar';
import { RouteName } from 'constant';
import { withDefaultStackNavigationConfig, wihtDefaultNavigtaionConfig } from 'navigation/shared';
import { IC_CALENDAR_ACTIVE, IC_CALENDAR_UN_ACTIVE } from 'utils/Icons';
import { convertWidth } from 'utils/convertSize';

const routeConfig: NavigationRouteConfig = {
  [RouteName.CALENDAR]: {
    screen: CalendarList,
    navigationOptions: (
      { navigation, screenProps }: { navigation: any, screenProps: any }
    ) => wihtDefaultNavigtaionConfig({ screenProps, navigation }),
  },
  [RouteName.AGENDA]: {
    screen: Agenda,
  },
};
const navigatorConfig: StackNavigatorConfig = withDefaultStackNavigationConfig({
  initialRouteName: RouteName.CALENDAR,
  activeIcon: IC_CALENDAR_ACTIVE,
  unActiveIcon: IC_CALENDAR_UN_ACTIVE,
});

export default createStackNavigator(routeConfig, navigatorConfig);
