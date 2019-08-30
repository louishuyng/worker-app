import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { colors, fontFamily } from 'utils/Theme';
import NewJobTab from './NewJobTab';
import { mockCurrentWorkingHour, mockJobData, mockJobDataReview } from './mock';
import { getString } from 'locales';
import InProgress from './InProgress';
import { convertWidth } from 'utils/convertSize';
import { EmptyScreen } from './EmptyScreen';
import ReviewTimeSheet from './ReviewTimeSheet';
import { RouteName } from 'constant';

interface State { }

interface Props {
  navigation: NavigationScreenProp<any>;
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
        tabBarTextStyle={{
          fontSize: convertWidth(13),
          fontFamily: fontFamily.regular,
          fontWeight: '400',
        }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <NewJobTab
          tabLabel={getString('jobList', 'newJobTabTitle')}
          key={1}
          currentWorkingHour={mockCurrentWorkingHour}
          jobData={[]}
          {...this.props}
        />
        <InProgress
          tabLabel={getString('jobList', 'inProgressTabTitle')}
          key={2}
          jobData={mockJobData}
          {...this.props}
        />
        <EmptyScreen
          tabLabel={getString('jobList', 'complitedTabTitle')}
          key={3}
          {...this.props}
        />
        <ReviewTimeSheet
          tabLabel={getString('jobList', 'reviewTimeSheetTabTitle')}
          key={4}
          jobData={mockJobDataReview}
          {...this.props}
        />
        <EmptyScreen
          tabLabel={getString('jobList', 'billedTabTitle')}
          key={5}
          {...this.props}
        />
        <EmptyScreen
          tabLabel={getString('jobList', 'paidTabTitle')}
          key={6}
          {...this.props}
        />
      </ScrollableTabView>
    );
  }
}
