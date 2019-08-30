import { RecoveryPasswordStage, InputData } from './recoveryPasswordTypes';
import { getString } from 'locales';
import { RouteName } from 'constant';

type recoveryFormModel = { [key in RecoveryPasswordStage]?: InputData[] };
type recoveryTitleModel = { [key in RecoveryPasswordStage]: string };
type recoveryDescriptionModel = {
  [key in RecoveryPasswordStage]: string | null
};
type recoveryButtonModel = { [key in RecoveryPasswordStage]: string };
type routeNameData = { [key in RecoveryPasswordStage]: string };

export const recoveryFormData: recoveryFormModel = {
  [RecoveryPasswordStage.SEND_MAIL]: [
    {
      label: getString('recovery', 'EMAIL'),
      type: 'email',
      fieldName: 'email',
      keyboardType: 'email-address',
    },
  ],
  [RecoveryPasswordStage.CONFIRM_MAIL]: undefined,
  [RecoveryPasswordStage.RESET_PASSWORD]: [
    {
      label: getString('recovery', 'NEW_PASSWORD'),
      type: 'password',
      fieldName: 'newPassword',
      keyboardType: 'default',
    },
    {
      label: getString('recovery', 'CONFIRM_PASSWORD'),
      type: 'password',
      fieldName: 'confirmPassword',
      keyboardType: 'default',
    },
  ],
};

export const recoveryTitleData: recoveryTitleModel = {
  [RecoveryPasswordStage.SEND_MAIL]: getString('recovery', 'RECOVERY_TITLE'),
  [RecoveryPasswordStage.CONFIRM_MAIL]: getString('recovery', 'RECOVERY_TITLE'),
  [RecoveryPasswordStage.RESET_PASSWORD]: getString(
    'recovery',
    'RESET_PASSWORD'
  ),
};

export const recoveryDescriptionData: recoveryDescriptionModel = {
  [RecoveryPasswordStage.SEND_MAIL]: getString(
    'recovery',
    'SEND_MAIL_INSTRUCTION'
  ),
  [RecoveryPasswordStage.CONFIRM_MAIL]: getString(
    'recovery',
    'SEND_MAIL_DESCIPTION'
  ),
  [RecoveryPasswordStage.RESET_PASSWORD]: null,
};

export const recoveryButtonTitleData: recoveryButtonModel = {
  [RecoveryPasswordStage.SEND_MAIL]: getString('recovery', 'CONTINUE'),
  [RecoveryPasswordStage.CONFIRM_MAIL]: getString('recovery', 'BACK_TO_LOGIN'),
  [RecoveryPasswordStage.RESET_PASSWORD]: getString(
    'recovery',
    'RESET_PASSWORD'
  ),
};

export const routeNameData: routeNameData = {
  [RecoveryPasswordStage.SEND_MAIL]: RouteName.CONFIRM_MAIL,
  [RecoveryPasswordStage.CONFIRM_MAIL]: RouteName.SIGN_IN,
  [RecoveryPasswordStage.RESET_PASSWORD]: RouteName.RESET_PASSWORD,
};
