
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Field } from 'formik';

import { PersonalStage, InputPersonalData } from '../models/personalScreenConfig';
import { FormikPersonalValues } from 'screens/Personal/models';
import { PersonalScreenModel } from '../models/personalScreenModel';
import { convertWidth, convertHeight } from 'utils/convertSize';
import { ButtonUI, TextInputFormikUI } from 'components/common';
import { Types } from 'components/common/Button/types';
import { getString } from 'locales';

const Container = styled.SafeAreaView`
  background: ${({ theme }) => theme.colors.aquaHaze};
  justify-content: space-between;
  height: 100%;
`;

const WrapperBody = styled.View`
  flex: 0.85;
`;

const WrapperTextField = styled.View`
  background: ${({ theme }) => theme.colors.lightBackground};
  padding-horizontal: ${convertHeight(16)};
  padding-vertical: ${convertWidth(16)};
  justify-content: space-around;
`;

const ExtendBox = styled.View<{height: any}>`
  background: ${({ theme }) => theme.colors.aquaHaze};
  height: ${({ height }) => convertHeight(height)};
`;

const TextField = styled.Text`
  color: ${({ theme }) => theme.colors.paleSky};
  font-size: ${convertWidth(14)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const SubField = styled.Text<{fontSize: any}>`
  font-size: ${({ fontSize }) => convertWidth(fontSize)};
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const WrapperFooter = styled.View`
  flex: 0.15;
  padding-horizontal: ${convertWidth(16)};
`;

const WrapperButton = styled.View`
  height: ${convertHeight(56)};
  padding-horizontal: ${convertWidth(16)};
`;
interface Props {
  stage: PersonalStage;
  values: FormikPersonalValues;
  errors: Object;
  handleSubmit: Function;
}

interface State {}

export default class PersonalScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  displayForm = (data: Array<InputPersonalData>): any => {
    return data.map((value, key) => {
      const { placeholder, fieldName, label, type, keyboardType } = value;
      return (
        <Field
          key={key}
          type={type}
          keyboardType={keyboardType}
          component={TextInputFormikUI}
          name={fieldName}
          placeholder={placeholder}
          label={label}
        />
      );
    });
  }

  render() {
    const {
      currentLabel, form,
    } = PersonalScreenModel(this.props.stage);

    const {
      handleSubmit,
    } = this.props;

    return (
      <>
        <Container>
          <ExtendBox height={16} />
          <WrapperBody>
            <WrapperTextField>
              <TextField>{currentLabel}</TextField>
              <SubField fontSize={16}>{
                this.props.stage === PersonalStage.EMAIL ? 'emailname@coned.com'
                  : '+1022025854' }
              </SubField>
            </WrapperTextField>
            <ExtendBox height={8}/>
            <WrapperTextField>
              {this.displayForm(form)}
            </WrapperTextField>
          </WrapperBody>
          <WrapperFooter>
            <WrapperButton>
              <ButtonUI
                type={Types.SUBMIT}
                title={getString('personal', 'SAVE')}
                onPress={() => handleSubmit()}
              />
            </WrapperButton>
          </WrapperFooter>
        </Container>
      </>
    );
  }
}
