import {
  RecoveryScreenConfig,
  RecoveryPasswordStage,
} from './recoveryPasswordTypes';

import {
  recoveryTitleData,
  recoveryDescriptionData,
  recoveryFormData,
  recoveryButtonTitleData,
  routeNameData,
} from './specificModel';

export default (status: RecoveryPasswordStage): RecoveryScreenConfig => ({
  title: recoveryTitleData[status],
  description: recoveryDescriptionData[status],
  forms: recoveryFormData[status],
  buttonTitle: recoveryButtonTitleData[status],
  navigator: routeNameData[status],
  status,
});
