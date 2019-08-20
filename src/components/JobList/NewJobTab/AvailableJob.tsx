import React from 'react';
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
import { Types } from 'components/common/Button/types';
import { AvailableJob } from './models/NewJobTabConfig';

const Container = styled.View`
  padding-top: 3%;
  border-width: 1;
  border-color: #DBDEDE;
  border-radius: 7;
  padding-horizontal: 10;
  padding-vertical: 10;
`;

const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10;
`;

const TitleStyled = styled.Text`
  font-size: 18;
  padding-left: 5;
`;

const WrapperTime = styled.View`
  flex-direction: row;
  padding-vertical: 10;
  align-items: center;
`;

const DateStyled = styled.Text`
  font-size: 16;
  padding-horizontal: 5;
`;
const TimeStyled = styled.Text`
  font-size: 16;
  padding-horizontal: 5;
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
  borderColor: #6F7780;
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
  font-size: 16;
  margin-horizontal: 5;
`;

interface AvailableJobProps extends AvailableJob { }

export const AvailableJobComponent = (props: AvailableJobProps) => {
  const { date, time: { begin, end }, location } = props;
  return (
    <View style={{ padding: 20 }}>
      <Container>
        <WrapperTitle>
          <Image source={ORANGE_CIRCLE} />
          <TitleStyled>Parking</TitleStyled>
        </WrapperTitle>
        <WrapperTime>
          <Image source={CALENDER_DAY_SOLID} />
          <DateStyled>{date}</DateStyled>
          <Image source={CLOCK_SOLID} />
          <TimeStyled>{begin} - {end}</TimeStyled>
        </WrapperTime>
        <WrapperLocation>
          <Image source={MAP_MARKER} />
          <LocationStyled>{location}</LocationStyled>
        </WrapperLocation>
        <WrapperButton>
          <WrapperImage>
            <ImageStyled source={LOCATION} />
          </WrapperImage>
          <ButtonStyled>
            <ButtonUI type={Types.SETSTATUS} title="Set to EnRoute" onPress={() => { }} />
          </ButtonStyled>
        </WrapperButton>
      </Container>
    </View>
  );
};
