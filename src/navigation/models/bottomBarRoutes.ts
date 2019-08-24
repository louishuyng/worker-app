import RootStackJobList from '../JobList/RootStackJobListNavigation';
import { routeConfig } from 'navigation/models/routeConfig';
import RootStackProfileNavigation from 'navigation/Profile/RootStackProfileNavigation';
import RootStackCalendarNavigation from 'navigation/Calendar/RootStackCalendarNavigation';
import { RouteName } from 'constant';

interface ListBottomBar extends Array<routeConfig> {
  [index: number]: routeConfig;
}

const bottomBarRouteLists: ListBottomBar = [
  {
    key: RouteName.JOB_LIST,
    screen: RootStackJobList,
  },
  {
    key: RouteName.CALENDAR,
    screen: RootStackCalendarNavigation,
  },
  {
    key: RouteName.PROFILE,
    screen: RootStackProfileNavigation,
  },
];

export default bottomBarRouteLists;
