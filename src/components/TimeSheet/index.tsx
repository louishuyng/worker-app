import React from 'react';
import styled from 'styled-components/native';

import { FormikTimeSheet } from 'screens/TimeSheet/models';
import { convertWidth, convertHeight } from 'utils/convertSize';
import RequestorForm from './form/RequestorForm';
import { formDataOne, requestorForm, formDataTwo, formDataThree, formDataFive } from './models';
import InformationForm from './form/InformationForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TotalHourForm from './form/TotalHourForm';
import { ButtonUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { getString } from 'locales';
import { StageTimeSheet } from './type';

interface Props {
  values: FormikTimeSheet,
  stageTimeSheet: StageTimeSheet,
}

interface State {}

const WrapperForm = styled.View`
  border-color: ${({ theme }) => theme.colors.iron};
  border-width: ${convertWidth(1)};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding-vertical: ${convertWidth(10)};
  padding-horizontal: ${convertWidth(10)};
  justify-content: space-between;
`;

const ExtendBox = styled.View`
  background-color: ${({ theme }) => theme.colors.aquaHaze};
  height: ${convertHeight(8)};
`;

const WrapperFooter = styled.View`
  padding-vertical: ${convertWidth(10)};
  padding-horizontal: ${convertWidth(10)};
  background-color: ${({ theme }) => theme.colors.aquaHaze};
`;

const ExtendFooterBox = styled.View`
  height: ${convertHeight(24)};
`;

const WrapperButton = styled.View`
  flex: 1;
  height: ${convertHeight(56)};
`;

const WrapperButtonInLine = styled.View`
  height: ${convertHeight(56)};
  width: ${convertWidth(168)};
`;

const WrapperButtonReivew = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${convertHeight(56)};
`;

export default class TimeSheet extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

   renderCreateButton = () => (
     <WrapperButton >
       <ButtonUI
         title={getString('jobList', 'createTimeSheet')}
         onPress={() => null}
         type={Types.SUBMIT}
       />
     </WrapperButton>
   )

   renderReviewButtonn = () => (
     <WrapperButtonReivew>
       <WrapperButtonInLine>
         <ButtonUI
           title={getString('timeSheet', 'skip')}
           onPress={() => null}
           type={Types.ADD}
         />
       </WrapperButtonInLine>
       <WrapperButtonInLine>
         <ButtonUI
           title={getString('timeSheet', 'sign')}
           onPress={() => null}
           type={Types.SUBMIT}
         />
       </WrapperButtonInLine>
     </WrapperButtonReivew>
   )

   render() {
     const { stageTimeSheet } = this.props;
     return (
       <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
         <WrapperForm>
           <RequestorForm data={requestorForm}/>
         </WrapperForm>
         <ExtendBox />
         <WrapperForm>
           <InformationForm data={formDataOne} />
         </WrapperForm>
         <ExtendBox />
         <WrapperForm>
           <InformationForm data={formDataTwo} />
         </WrapperForm>
         <ExtendBox />
         <WrapperForm>
           <InformationForm data={formDataThree} />
         </WrapperForm>
         <WrapperForm>
           <TotalHourForm data={formDataFive} />
         </WrapperForm>
         <WrapperFooter>
           <ExtendFooterBox />
           {
             stageTimeSheet === StageTimeSheet.CREATE
               ? this.renderCreateButton()
               : this.renderReviewButtonn()
           }
           <ExtendFooterBox />
         </WrapperFooter>
       </KeyboardAwareScrollView>
     );
   }
}
