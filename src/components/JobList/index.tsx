import React from 'react';
import NewJobTab from './NewJobTab';
import { NewJobTabStage } from 'components/JobList/NewJobTab/models/newJobTabConfig';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { colors } from 'utils/Theme';
const DemoTabView = () => (
  <ScrollableTabView
    tabBarActiveTextColor='#3A3C3E'
    tabBarInactiveTextColor='#6F7780'
    tabBarUnderlineStyle={{ backgroundColor: colors.skyBlue }}
    tabBarTextStyle={{ fontSize: 13, fontWeight: '400' }}
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
    <NewJobTab key={1} tabLabel="New Job" stage={NewJobTabStage.ON_HAVE_AVAILABLE_JOB} />
    <NewJobTab key={2} tabLabel="New Job" stage={NewJobTabStage.NOT_YET_SET_AVAILABLE_TIME} />
    <NewJobTab key={3} tabLabel="New Job" stage={NewJobTabStage.ON_SET_AVAILABLE_TIME} />
    <NewJobTab key={4} tabLabel="New Job" stage={NewJobTabStage.ON_HAVE_AVAILABLE_JOB} />
  </ScrollableTabView>
);

export default DemoTabView;
