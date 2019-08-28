import React, { Component } from 'react';
import { Image, View, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

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
import { setStatusLable, setStatusModalLabel, setStatusIcon } from '../models/jobListModels';
import { convertWidth, convertHeight } from 'utils/convertSize';

const Container = styled.View<{isFlat: boolean}>`
  padding-top: 3%;
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

const WrapperStatusIcon = styled.View`
  width: ${convertHeight(35)};
  height: ${convertHeight(35)};
  justify-content: center;
  align-items: center;
`;

const BackgroundStatusIcon = styled.View`
  position: absolute;
  width: ${convertHeight(35)};
  height: ${convertHeight(35)};
  border-radius: ${convertHeight(25)};
  border-color: ${({ theme }) => theme.colors.paleSky};
  border-width: ${convertWidth(1)};
  opacity: 0.1;
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
  height: ${convertHeight(39)};
`;

const WrapperImage = styled.TouchableOpacity`
  flex: 0.15;
  border-width: ${convertWidth(1)};
  align-items: center;
  border-radius: ${convertWidth(5)};
  margin-right: ${convertWidth(11)};
  borderColor: ${({ theme }) => theme.colors.paleSky};
`;

const ImageStyled = styled(Image)`
  flex: 1;
  resize-mode: contain;
`;

const ButtonStyled = styled.View`
  flex: 0.8;
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
    } = this.props;

    const formatDate = date.toLocaleDateString('en-US');

    const renderButton = () => {
      return status !== JobStatus.REVIEW && (
        <>
        <View style={{
          height: convertHeight(20),
        }}/>
        <WrapperButton>
          <WrapperImage>
            <ImageStyled source={ButtonIcon} />
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

    const isInProgress = status !== JobStatus.NEW && status !== JobStatus.REVIEW;
    return (
      <View style={{
        paddingBottom: isHideLocation ? 0 : convertHeight(8),
      }}>
        <Container isFlat={isFlat as boolean}>
          <WrapperHeader>
            <WrapperTitle>
              {status === JobStatus.NEW && (
                <Image source={ORANGE_CIRCLE} />
              )}
              <TitleStyled>{getString('jobList', 'parkingTitle')}</TitleStyled>
            </WrapperTitle>
            { isInProgress && !isHideIcon && (
              <WrapperStatusIcon>
                <BackgroundStatusIcon />
                <Image
                  style={{ resizeMode: 'contain' }}
                  source={setStatusIcon[status] as ImageSourcePropType}
                />
              </WrapperStatusIcon>
            )}
          </WrapperHeader>
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
