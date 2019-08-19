import React from 'react';
import { withFormik } from 'formik';

import { AuthStage } from '../../components/Auth/models/authScreenConfig';
import { initMapPropsToValue, FormikAuthValues, handleSubmitByStage } from './models';
import { AuthValidationSchema } from './validation';

export interface ConnectFormikAuthParamaters {
  Component: any,
  stage: AuthStage,
}

interface Props {
  navigation: Object
}

export const withConnectFormikAuth = ({ Component, stage }: ConnectFormikAuthParamaters) => (props: Props) => {
  const RenderComponent = withFormik<Props, FormikAuthValues>({
    enableReinitialize: false,
    validationSchema: AuthValidationSchema[stage],
    mapPropsToValues: () => initMapPropsToValue[stage],
    handleSubmit: (values) => handleSubmitByStage[stage](values),
    displayName: 'Auth',
  })(Component);
  return <RenderComponent {...props} />;
};
