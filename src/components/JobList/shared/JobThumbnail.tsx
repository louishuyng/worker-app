import React, { Component } from 'react';
import { Image, View, ImageSourcePropType, Animated } from 'react-native';
import styled from 'styled-components/native';
import { NavigationScreenProp, AnimatedValue } from 'react-navigation';
import { Tooltip } from 'react-native-ui-kitten';

import {
  ORANGE_CIRCLE,
  CALENDER_DAY_SOLID,
  CLOCK_SOLID,
  MAP_MARKER,
} from 'utils/Icons';
import { ButtonUI } from 'components/common';
import { SetStatusModal } from 'components/common/Modal';
import { Types } from 'components/common/Button/types';
import { JobDetail, JobStatus } from '../type';
import { getString } from 'locales';
import { setStatusLable, setStatusModalLabel, setStatusIcon, setStatusHint } from '../models/jobListModels';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { RouteName } from 'constant';
import { colors } from 'utils/Theme';

const Container = styled.TouchableOpacity<{isFlat: boolean}>`
  padding-top: 3%;
  z-index: 1;
  border-width: ${convertWidth(1)};
  border-color: ${({ theme }) => theme.colors.iron};
  border-radius: ${({ isFlat }) => {
    if (isFlat) return 0;
    return convertWidth(7);
  }};
  padding-horizontal: ${convertWidth(11)};
  padding-vertical: ${convertHeight(11)};
  background: ${({ theme }) => theme.colors.lightBackground};
`;

const WrapperHeader = styled.View`
  padding-vertical: ${convertWidth(10)};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const WrapperTitle = styled.View`
`;

const TitleStyled = styled.Text`
  font-size: ${convertWidth(18)};
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

const WrapperStatusIcon = styled.TouchableOpacity`
  width: ${convertHeight(35)};
  height: ${convertHeight(35)};
  justify-content: center;
  align-items: center;
`;

const WrapperTime = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const WrapperImageTime = styled.View`
  height: ${convertHeight(16)};
  justify-content: center;
`;

const WrapperInnerTime = styled.View`
  flex-direction: row;
  justify-content: center;
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
  height: ${convertHeight(37)};
`;

const WrapperImage = styled.TouchableOpacity`
  flex: 0.1;
  align-items: center;
  margin-right: ${convertWidth(12)};
`;

const ImageStyled = styled(Image)`
  flex: 1;
  resize-mode: contain;
`;

const ButtonStyled = styled.View`
  flex: 0.9;
`;

const LocationStyled = styled.Text`
  font-size: ${convertWidth(16)};
  margin-horizontal: 5;
  color: ${({ theme }) => theme.colors.capeCod};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

interface JobThumbNailProps {
  jobData: JobDetail;
  isHideLocation?: boolean;
  isFlat?: boolean;
  isHideIcon?: boolean;
  ButtonIcon: ImageSourcePropType;
  navigation?: NavigationScreenProp<any>;
}

interface JobThumbNailState {
  isModalVisible: boolean;
  isVisibleToolTip: boolean;
}

export class JobThumbnail extends Component<JobThumbNailProps, JobThumbNailState> {
  constructor(props: JobThumbNailProps) {
    super(props);
    this.state = {
      isModalVisible: false,
      isVisibleToolTip: false,
    };
  };

  render() {
    const {
      jobData: {
        date,
        timeAvaliable: {
          begin: { hour: beginHour, minute: beginMinute },
          end: { hour: endHour, minute: endMinute },
        },
        location,
        status,
      },
      ButtonIcon,
      isFlat,
      isHideLocation,
      isHideIcon,
      navigation,
    } = this.props;

    const formatDate = date.toLocaleDateString('en-US');

    const handleClickSetStatus = (status: JobStatus) => {
      if (status !== JobStatus.ENDOFSHIFT) {
        return this.setState({
          isModalVisible: true,
        });
      } else {
        navigation && navigation.navigate(RouteName.JOB, { data: this.props.jobData });
      }
    };

    const handleClickJobThumb = () => {
      if (status !== JobStatus.REVIEW && navigation) {
        navigation.navigate(RouteName.JOB, { data: this.props.jobData });
      } else if (navigation) {
        navigation.navigate(RouteName.REVIEW_TIMESHEET);
      }
    };

    const renderButton = () => {
      return status !== JobStatus.REVIEW && (
        <>
        <View style={{
          height: convertHeight(20),
        }}/>
        <WrapperButton>
          <WrapperImage onPress={() => navigation && navigation.navigate(RouteName.MAPVIEW)}>
            <ImageStyled source={ButtonIcon} />
          </WrapperImage>
          <ButtonStyled>
            <ButtonUI
              type={Types.SETSTATUS}
              title={setStatusLable[status]}
              onPress={() => handleClickSetStatus(status)}
            />
          </ButtonStyled>
        </WrapperButton>
        </>
      );
    };

    const renderModal = () => {
      return this.state.isModalVisible && (
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

    const toggleTooltip = () => {
      this.setState({
        isVisibleToolTip: !this.state.isVisibleToolTip,
      });

      setTimeout(() => {
        this.setState({
          isVisibleToolTip: !this.state.isVisibleToolTip,
        });
      }, 1000);
    };

    const isInProgress = status !== JobStatus.NEW && status !== JobStatus.REVIEW;

    return (
      <View style={{
        paddingBottom: isHideLocation ? 0 : convertHeight(8),
      }}>
        <Container
          disabled={isHideIcon}
          isFlat={isFlat as boolean}
          onPress={() => handleClickJobThumb()}
        >
          <WrapperHeader>
            <WrapperTitle>
              {status === JobStatus.NEW && (
                <Image source={ORANGE_CIRCLE} />
              )}
              <TitleStyled>{getString('jobList', 'parkingTitle')}</TitleStyled>
            </WrapperTitle>
            { isInProgress && !isHideIcon && (
              <WrapperStatusIcon
                onPress={() => toggleTooltip()}
              >
                <Tooltip
                  visible={this.state.isVisibleToolTip}
                  text={setStatusHint[status] as string}
                  onBackdropPress={() => null}
                  placement="left start"
                  indicatorStyle = {{
                    left: status === JobStatus.ENDOFSHIFT ? convertWidth(70) : convertWidth(55),
                    backgroundColor: colors.doveGray,
                  }}
                  style={{
                    left: status === JobStatus.ENDOFSHIFT ? convertWidth(70) : convertWidth(55),
                    backgroundColor: colors.doveGray,
                  }}
                >
                  <Image
                    style={{ resizeMode: 'contain' }}
                    source={setStatusIcon[status] as ImageSourcePropType}
                  />
                </Tooltip>
              </WrapperStatusIcon>
            )}
          </WrapperHeader>
          <WrapperTime>
            <WrapperInnerTime>
              <WrapperImageTime>
                <Image source={CALENDER_DAY_SOLID} />
              </WrapperImageTime>
              <DateStyled>{formatDate}</DateStyled>
            </WrapperInnerTime>
            <WrapperInnerTime>
              <WrapperImageTime>
                <Image source={CLOCK_SOLID} />
              </WrapperImageTime>
              <TimeStyled>
                {beginHour}:{beginMinute} - {endHour}:{endMinute}
              </TimeStyled>
            </WrapperInnerTime>
          </WrapperTime>
          {!isHideLocation && (
            <WrapperLocation>
              <Image source={MAP_MARKER} />
              <LocationStyled>{location}</LocationStyled>
            </WrapperLocation>)}
          {renderButton()}
        </Container>
        {renderModal()}
      </View>
    );
  };
};
