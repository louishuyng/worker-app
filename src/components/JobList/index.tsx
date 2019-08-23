import React from 'react';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { colors } from 'utils/Theme';
import NewJobTab from './NewJobTab';
import { mockCurrentWorkingHour, mockJobData } from './mock';
import { getString } from 'locales';
import { BottomBarIconUI } from 'components/common';
import { IC_JOBLIST_ACTIVE, IC_CALENDAR_UN_ACTIVE } from 'utils/Icons';
import { TabBarIconProps } from 'react-navigation';

interface State { }

interface Props {
  navigation: { navigate: Function }
}
export default class JobList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollableTabView
        tabBarActiveTextColor={colors.capeCod}
        tabBarInactiveTextColor={colors.paleSky}
        tabBarUnderlineStyle={{
          backgroundColor: colors.skyBlue,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
        }}
        tabBarTextStyle={{ fontSize: 13, fontWeight: '400' }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <NewJobTab
          tabLabel={getString('jobList', 'newJobTabTitle')}
          key={1}
          currentWorkingHour={mockCurrentWorkingHour}
          jobData={mockJobData}
          {...this.props}
        />
      </ScrollableTabView>
    );
  }
}
