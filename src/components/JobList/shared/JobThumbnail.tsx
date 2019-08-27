import React, { Component } from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';

import {
  ORANGE_CIRCLE,
  CALENDER_DAY_SOLID,
  CLOCK_SOLID,
  MAP_MARKER,
  LOCATION,
} from 'utils/Icons';
import { ButtonUI } from 'components/common';
import { SetStatusModal } from 'components/common/Modal';
import { Types } from 'components/common/Button/types';
import { JobDetail, ProgressStatus } from '../type';
import { getString } from 'locales';
import { setStatusLable, setStatusModalLabel } from '../models/jobListModels';
import { convertWidth, convertHeight } from 'utils/convertSize';

const Container = styled.View`
  padding-top: 3%;
  border-width: ${convertWidth(1)};
  border-color: ${({ theme }) => theme.colors.iron};
  border-radius: ${convertWidth(7)};
  padding-horizontal: ${convertWidth(11)};
  padding-vertical: ${convertHeight(11)};
`;

const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10;
`;

const TitleStyled = styled.Text`
  font-size: ${convertWidth(18)};
  padding-left: 5;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

const WrapperTime = styled.View`
  flex-direction: row;
  padding-vertical: 10;
  align-items: center;
`;

const WrapperInnerTime = styled.View`
  flex-direction: row;
  margin-right: 5%;
`;

const DateStyled = styled.Text`
  font-size: ${convertWidth(16)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.capeCod};
  padding-horizontal: 5;
`;
const TimeStyled = styled.Text`
  font-size: ${convertWidth(16)};
  padding-horizontal: 5;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const WrapperLocation = styled.View`
  flex-direction: row;
  padding-vertical: 10;
`;

const WrapperButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

const WrapperImage = styled.TouchableOpacity`
  height: 100%;
  flex: 0.2;
  border-width: 1;
  align-items: center;
  border-radius: 5;
  margin-right: 5;
  borderColor: ${({ theme }) => theme.colors.paleGray};
`;

const ImageStyled = styled(Image)`
  flex: 1;
  resize-mode: contain;
`;

const ButtonStyled = styled.View`
  flex: 0.8;
  height: 100%;
`;

const LocationStyled = styled.Text`
  font-size: ${convertWidth(16)};
  margin-horizontal: 5;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

interface JobThumbNailProps {
  jobData: JobDetail;
  isButtonAppear: boolean;
  progressStatus: ProgressStatus;
}

interface JobThumbNailState {
  isModalVisible: boolean;
}

export class JobThumbnail extends Component<JobThumbNailProps, JobThumbNailState> {
  constructor(props: JobThumbNailProps) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  };

  render() {
    const {
      jobData: {
        date,
        timeAvaliable: { beginHour, beginMinute, endHour, endMinute },
        location,
        status,
      },
      isButtonAppear,
      progressStatus,
    } = this.props;

    const formatDate = date.toLocaleDateString('en-US');

    const renderButton = () => {
      return isButtonAppear && (
        <WrapperButton>
          <WrapperImage>
            <ImageStyled source={LOCATION} />
          </WrapperImage>
          <ButtonStyled>
            <ButtonUI
              type={Types.SETSTATUS}
              title={setStatusLable[status]}
              onPress={() => {
                this.setState({
                  isModalVisible: true,
                });
              }}
            />
          </ButtonStyled>
        </WrapperButton>);
    };

    const renderModal = () => {
      return isButtonAppear && this.state.isModalVisible && (
        <SetStatusModal
          onPress={() => null}
          statusLabel={setStatusModalLabel[status]}
          closeModal={() => {
            this.setState({
              isModalVisible: false,
            });
          }}
        />
      );
    };

    return (
      <View style={{
        paddingBottom: convertHeight(8),
      }}>
        <Container>
          <WrapperTitle>
            {progressStatus === ProgressStatus.NEWJOB && (
              <Image source={ORANGE_CIRCLE} />
            )}
            <TitleStyled>{getString('jobList', 'parkingTitle')}</TitleStyled>
          </WrapperTitle>
          <WrapperTime>
            <WrapperInnerTime>
              <Image source={CALENDER_DAY_SOLID} />
              <DateStyled>{formatDate}</DateStyled>
            </WrapperInnerTime>
            <WrapperInnerTime>
              <Image source={CLOCK_SOLID} />
              <TimeStyled>
                {beginHour}:{beginMinute} - {endHour}:{endMinute}
              </TimeStyled>
            </WrapperInnerTime>
          </WrapperTime>
          <WrapperLocation>
            <Image source={MAP_MARKER} />
            <LocationStyled>{location}</LocationStyled>
          </WrapperLocation>
          {renderButton()}
        </Container>
        {renderModal()}
      </View>
    );
  };
};
