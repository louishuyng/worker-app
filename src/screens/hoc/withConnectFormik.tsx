
import React from 'react';
import { withFormik } from 'formik';
import { NavigationScreenProp } from 'react-navigation';

import { ObjectSchema } from 'yup';

interface initMapPropsInterface {
  [key: string]: any;
}

export interface handleSubmitFormikInterface {
  (values: any, navigation: NavigationScreenProp<any>): any
}

export interface ConnectFormikAuthParamaters {
  displayName: string,
  Component: any,
  customSchema?: ObjectSchema,
  initMapProps: initMapPropsInterface,
  handleSubmit: handleSubmitFormikInterface,
}

interface Props {
  navigation: NavigationScreenProp<any>;
}

export const withConnectFormik = ({
  Component, displayName, customSchema, initMapProps, handleSubmit,
}: ConnectFormikAuthParamaters) => (props: Props) => {
  const RenderComponent = withFormik<Props, any>({
    enableReinitialize: false,
    validationSchema: customSchema,
    mapPropsToValues: () => initMapProps,
    handleSubmit: (values) => {
      handleSubmit(values, props.navigation);
    },
    displayName,
  })(Component);
  return <RenderComponent {...props} />;
};
