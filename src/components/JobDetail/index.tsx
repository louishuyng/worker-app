import React from 'react';
import styled from 'styled-components/native';

import { JobThumbnail } from 'components/JobList/shared';
import { mockJobData } from 'components/JobList/mock';
import SectionJobDetail from './section';
import { getString } from 'locales';
import { IC_CAMERA } from 'utils/Icons';
import DividedBox from './content/DividedBox';
import { TitleTimeData, TitleDetailsOneData, TitleDetailsTwoData } from './models';
import { mockdataDetailsOne, mockdataTime, mockdataDetailsTwo } from './mock';
import GridBox from './content/GridBox';
import DisplayBox from './content/DisplayBox';
import { ButtonUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { convertHeight, convertWidth } from 'utils/convertSize';
import { NavigationScreenProp } from 'react-navigation';
import Map from './content/Map';

interface Props {
  navigation: NavigationScreenProp<any>;
}

interface State {}

const ScrollView = styled.ScrollView`
  background: ${({ theme }) => theme.colors.aquaHaze};
`;

const WrapperFooter = styled.View`
  justify-content: center;
  align-items: center;
`;

const ExtendFooterBox = styled.View`
  height: ${convertHeight(24)};
`;

const WrapperButton = styled.View`
  height: ${convertHeight(56)};
  width: 100%;
  padding-horizontal: ${convertWidth(10)};
`;

export default class JobDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation: { getParam } } = this.props;

    return (
      <ScrollView>
        <JobThumbnail
          jobData={getParam('data')} isFlat={true} isHideIcon={true}
          isHideLocation={true}
          ButtonIcon={IC_CAMERA}
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'address')}
          Content={
            () => (<Map locationTitle={mockJobData[0].location as string}/>)}
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'time')}
          Content={
            () => (
              <DividedBox
                titleData={TitleTimeData}
                contentData={mockdataTime}
              />
            )}
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'details')}
          Content={
            () => (
              <DividedBox
                titleData={TitleDetailsOneData}
                contentData={mockdataDetailsOne }
              />
            )}
        />
        <SectionJobDetail
          Content={
            () => (
              <GridBox
                titleData={TitleDetailsTwoData}
                contentData={mockdataDetailsTwo}
              />
            )}
        />
        <SectionJobDetail
          titleHeader={getString('jobDetail', 'comments')}
          Content={
            () => (
              <DisplayBox
                contentData={' Lorem ipsum dolor sit amet, cat. '}
              />
            )}
        />
        <WrapperFooter>
          <ExtendFooterBox />
          <WrapperButton >
            <ButtonUI
              title={getString('jobList', 'createTimeSheet')}
              onPress={() => null}
              type={Types.SUBMIT}
            />
          </WrapperButton>
        </WrapperFooter>
      </ScrollView>
    );
  }
}
