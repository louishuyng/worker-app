
import React from 'react';
import { withFormik } from 'formik';

import { ObjectSchema } from 'yup';

interface initMapPropsInterface {
  [key: string]: any;
}

interface handleSubmitFormikInterface {
  (values: any): any
}

export interface ConnectFormikAuthParamaters {
  displayName: string,
  Component: any,
  customSchema?: ObjectSchema,
  initMapProps: initMapPropsInterface,
  handleSubmit: handleSubmitFormikInterface,
}

interface Props {}

export const withConnectFormik = ({
  Component, displayName, customSchema, initMapProps, handleSubmit,
}: ConnectFormikAuthParamaters) => (props: Props) => {
  const RenderComponent = withFormik<Props, any>({
    enableReinitialize: false,
    validationSchema: customSchema,
    mapPropsToValues: () => initMapProps,
    handleSubmit: (values) => handleSubmit(values),
    displayName,
  })(Component);
  return <RenderComponent {...props} />;
};
