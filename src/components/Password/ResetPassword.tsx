import React from 'react';

import getModelData from 'components/Password/models/getModelData';
import LayoutPasswordScreen from 'components/Password/shared';
import { RecoveryPasswordStage } from 'components/Password/models/recoveryPasswordTypes';

export const ResetPasswordComponent = (props: any) => {
  return (
    <LayoutPasswordScreen
      onPress={() => {
        props.navigation.navigate(
          getModelData(RecoveryPasswordStage.RESET_PASSWORD).navigator
        );
      }}
      {...getModelData(RecoveryPasswordStage.RESET_PASSWORD)}
      {...props}
    />
  );
};