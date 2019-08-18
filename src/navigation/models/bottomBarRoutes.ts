import RootNavigator from '../RootStackNavigator';
import { routeConfig } from 'navigation/models/routeConfig';
import { BottomBarIcon } from 'shared';
import {
  IC_JOBLIST_ACTIVE, IC_JOBLIST_UN_ACTIVE, IC_CALENDAR_ACTIVE,
  IC_NOTIFICATION_ACITVE, IC_USER_ACTIVE, IC_USER_UN_ACTIVE, IC_NOTIFICATION_UN_ACITVE, IC_CALENDAR_UN_ACTIVE,
} from 'utils/Icons';

interface ListBottomBar extends Array<routeConfig> {
  [index: number]: routeConfig;
};

const bottomBarRouteLists: ListBottomBar = [
  {
    key: 'JobList',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: IC_JOBLIST_ACTIVE }),
    unaActiveIcon: BottomBarIcon({ source: IC_JOBLIST_UN_ACTIVE }),
  },
  {
    key: 'Calendar',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: IC_CALENDAR_ACTIVE }),
    unaActiveIcon: BottomBarIcon({ source: IC_CALENDAR_UN_ACTIVE }),
  },
  {
    key: 'Notification',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: IC_NOTIFICATION_ACITVE }),
    unaActiveIcon: BottomBarIcon({ source: IC_NOTIFICATION_UN_ACITVE }),
  },
  {
    key: 'User',
    screen: RootNavigator,
    activeIcon: BottomBarIcon({ source: IC_USER_ACTIVE }),
    unaActiveIcon: BottomBarIcon({ source: IC_USER_UN_ACTIVE }),
  },
];

export default bottomBarRouteLists;
