import JobList from '../JobList/RootStackNavigator';
import { routeConfig } from 'navigation/models/routeConfig';

interface ListBottomBar extends Array<routeConfig> {
  [index: number]: routeConfig;
};

const bottomBarRouteLists: ListBottomBar = [
  {
    key: 'JobList',
    screen: JobList,
  },
  {
    key: 'Calendar',
    screen: JobList,
  },
  {
    key: 'Notification',
    screen: JobList,
  },
  {
    key: 'User',
    screen: JobList,
  },
];

export default bottomBarRouteLists;
