import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Field } from 'formik';
import { NavigationScreenProp } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getString } from 'locales';
import { TextInputFormikUI, ButtonUI } from 'components/common';
import { IC_ARROW } from 'utils/Icons';
import { Types } from 'components/common/Button/types';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { RouteName } from 'constant';
import { Image, Platform } from 'react-native';
import { colors } from 'utils/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.aquaHaze};
  padding-vertical: ${convertHeight(16)};
  justify-content: space-between;
`;

const WrapperContent = styled.View`
  border-width: 1;
  padding-top: ${convertHeight(18)};
  border-color: ${({ theme }) => theme.colors.iron};
  background-color: ${({ theme }) => theme.colors.white};
  padding-left: 5%;
`;

const WrapperTitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${convertWidth(14)};
  color: ${({ theme }) => theme.colors.capeCod};
`;

const WrapperInput = styled.View`
  padding-right: 5%;
`;

const HorizontalLine = styled.View`
  height: 1;
  width: 100%;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.iron};
`;

const WrapperNavSignature = styled.TouchableOpacity`
  padding-vertical: ${convertHeight(18)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 5%;
`;

const WrapperImageSignature = styled.View`
  flex-direction: row;
  padding-horizontal: 10%;
  height: ${convertHeight(300)};
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;

const NavIcon = styled.Image``;

const WrapperButton = styled.View`
  height: ${convertHeight(56)};
  padding-horizontal: 5%;
`;

const TouchableNativeFeedback = styled.TouchableNativeFeedback`
`;

interface Props {
  navigation: NavigationScreenProp<any>;
  handleSubmit: any;
}
const SignTimeSheet = (props: Props) => {
  const [dataSignature, setDataSignature] = useState();
  const [uri, setUri] = useState();
  useEffect(() => {
    const dataSignature = props.navigation.getParam('dataSignature');
    if (dataSignature) setDataSignature(dataSignature);
  }, []);

  useEffect(() => {
    let uri = null;
    if (dataSignature) {
      uri = dataSignature && `data:image/png;base64,${dataSignature.encoded}`;
      setUri(uri);
    } else setUri(uri);
  }, [dataSignature]);

  const CustomButton = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Container>
      <WrapperContent>
        <WrapperInput>
          <Field
            name='supervisorName'
            label={getString('signTimeSheet', 'supervisor')}
            component={TextInputFormikUI}
          />
        </WrapperInput>
        <HorizontalLine />
        <WrapperNavSignature onPress={() => props.navigation.navigate(
          RouteName.SIGNATURE, {
            dataSignature,
          })}>
          <WrapperTitle>{getString('signTimeSheet', 'signature')}</WrapperTitle>
          <NavIcon source={IC_ARROW} />
        </WrapperNavSignature>
      </WrapperContent>
      {dataSignature &&
        <WrapperImageSignature>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={{ uri }}
          />
          <CustomButton onPress={() => setDataSignature(undefined)}>
            <Icon name="clear" size={25} color={colors.paleSky} />
          </CustomButton>
        </WrapperImageSignature>
      }
      <WrapperButton>
        <ButtonUI
          title={getString('signTimeSheet', 'save')}
          type={Types.SUBMIT}
          onPress={() => props.handleSubmit()}
        />
      </WrapperButton>
    </Container>
  );
};

export default SignTimeSheet;
