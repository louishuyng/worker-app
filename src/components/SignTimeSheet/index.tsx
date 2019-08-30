import React from 'react';
import styled from 'styled-components/native';
import { Field } from 'formik';

import { getString } from 'locales';
import { TextInputFormikUI, ButtonUI } from 'components/common';
import { IC_ARROW } from 'utils/Icons';
import { Types } from 'components/common/Button/types';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { RouteName } from 'constant';

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

const NavIcon = styled.Image``;

const WrapperButton = styled.View`
  height: ${convertHeight(56)};
  padding-horizontal: 5%;
`;

const SignTimeSheet = (props: any) => {
  return (
    <Container>
      <WrapperContent>
        <WrapperInput>
          <Field
<<<<<<< HEAD
            name='superivorName'
=======
            name='supervisorName'
>>>>>>> Task Update Calendar
            label={getString('signTimeSheet', 'supervisor')}
            component={TextInputFormikUI}
          />
        </WrapperInput>
        <HorizontalLine />
        <WrapperNavSignature onPress={() => props.navigation.navigate(RouteName.SIGNATURE)}>
          <WrapperTitle>{getString('signTimeSheet', 'signature')}</WrapperTitle>
          <NavIcon source={IC_ARROW} />
        </WrapperNavSignature>
      </WrapperContent>
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
