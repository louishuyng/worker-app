
import React from 'react';
import { withFormik } from 'formik';
import { NavigationScreenProp } from 'react-navigation';

import { ObjectSchema } from 'yup';

interface initMapPropsInterface {
  [key: string]: any;
}

export interface handleSubmitFormikInterface {
  (values: any, navigation: NavigationScreenProp<any>, action: any): any
}

export interface ConnectFormikAuthParamaters {
  displayName: string;
  Component: any;
  customSchema?: ObjectSchema;
  initMapProps: initMapPropsInterface;
  onSubmit: handleSubmitFormikInterface;
  actionKey: string;
}

interface Props {
  navigation: NavigationScreenProp<any>;
  [key: string]: any;
}

export const withConnectFormik = ({
  Component, displayName, customSchema, initMapProps, onSubmit, actionKey,
}: ConnectFormikAuthParamaters) => (props: Props) => {
  const RenderComponent = withFormik<Props, any>({
    enableReinitialize: false,
    validationSchema: customSchema,
    mapPropsToValues: () => initMapProps,
    handleSubmit: (values) => {
      onSubmit(values, props.navigation, props[actionKey]);
    },
    displayName,
  })(Component);

  return <RenderComponent {...props} />;
};
