import React from 'react';
import LayoutPasswordScreen from '../shared/layout';
import getModelData from '../models/getModelData';
import { RecoveryPasswordStage } from '../models/recoveryPasswordTypes';

const ConfirmMailScreen = (props: any) => {
  return (
    <LayoutPasswordScreen
      onPress={() => {
        props.navigation.navigate(
          getModelData(RecoveryPasswordStage.CONFIRM_MAIL).navigator
        );
      }}
      {...getModelData(RecoveryPasswordStage.CONFIRM_MAIL)}
    />
  );
};

export default ConfirmMailScreen;
