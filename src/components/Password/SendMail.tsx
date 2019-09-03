import React from 'react';

import LayoutPasswordScreen from './shared';
import getModelData from './models/getModelData';
import { RecoveryPasswordStage } from './models/recoveryPasswordTypes';

export const SendMailComponent = (props: any) => {
  return (
    <LayoutPasswordScreen
      onPress={() => {
        props.navigation.navigate('ConfirmMail');
      }}
      stage={RecoveryPasswordStage.SEND_MAIL}
      {...getModelData(RecoveryPasswordStage.SEND_MAIL)}
      {...props}
    />
  );
};
