import React from 'react';
import LayoutPasswordScreen from '../shared/layout';
import getModelData from '../models/getModelData';
import { RecoveryPasswordStage } from '../models/recoveryPasswordTypes';

const SendMailScreen = (props: any) => {
  return (
    <LayoutPasswordScreen
      onPress={() => {
        props.navigation.navigate('ConfirmMail');
      }}
      {...getModelData(RecoveryPasswordStage.SEND_MAIL)}
      {...props}
    />
  );
};

export default SendMailScreen;
