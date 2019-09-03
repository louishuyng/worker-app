import React from 'react';

import LayoutPasswordScreen from './shared';
import getModelData from './models/getModelData';
import { RecoveryPasswordStage } from './models/recoveryPasswordTypes';

export const ConfirMailComponent = (props: any) => {
  return (
    <LayoutPasswordScreen
      onPress={() => {
        props.navigation.navigate(
          getModelData(RecoveryPasswordStage.CONFIRM_MAIL).navigator
        );
      }}
      stage={RecoveryPasswordStage.CONFIRM_MAIL}
      {...props}
      {...getModelData(RecoveryPasswordStage.CONFIRM_MAIL)}
    />
  );
};
