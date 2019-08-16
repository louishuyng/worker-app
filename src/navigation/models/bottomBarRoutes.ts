import RootNavigator from '../RootStackNavigator';
import { routeConfig } from 'types/routeConfig';
import { BottomBarIcon } from 'shared';
import {
  JOBLIST_ACTIVE, JOBLIST_UN_ACTIVE, CALENDAR_ACTIVE,
  NOTIFICATION_ACITVE, USER_ACTIVE, USER_UN_ACTIVE, NOTIFICATION_UN_ACITVE, CALENDAR_UN_ACTIVE,
} from 'utils/Icons';

interface ListBottomBar extends Array<routeConfig> {
  [index: number]: routeConfig,
};

const bottomBarRouteLists: ListBottomBar = [
  {
    key: 'JobList',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: JOBLIST_ACTIVE }),
    unaActiveIcon: BottomBarIcon({ source: JOBLIST_UN_ACTIVE }),
  },
  {
    key: 'Calendar',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: CALENDAR_ACTIVE }),
    unaActiveIcon: BottomBarIcon({ source: CALENDAR_UN_ACTIVE }),
  },
  {
    key: 'Notification',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: NOTIFICATION_ACITVE }),
    unaActiveIcon: BottomBarIcon({ source: NOTIFICATION_UN_ACITVE }),
  },
  {
    key: 'User',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: USER_ACTIVE }),
    unaActiveIcon: BottomBarIcon({ source: USER_UN_ACTIVE }),
  },
];

export default bottomBarRouteLists;
