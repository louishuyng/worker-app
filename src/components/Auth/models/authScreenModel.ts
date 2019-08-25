import { AuthScreenConfig, AuthStage } from './authScreenConfig';

import {
  authTitleData,
  autFormData,
  authSuggestionTitleData,
  authNavigatorTitleData,
  authButtonLabelData,
  authNavigatorData,
  authSubNavigatorData,
  authStepData,
  authAfterIconData,
} from './specificModel';

export const AuthScreenModel = (status: AuthStage): AuthScreenConfig => ({
  title: authTitleData[status],
  status,
  form: autFormData[status],
  buttonLabel: authButtonLabelData[status],
  suggestionTitle: authSuggestionTitleData[status],
  navigatorTitle: authNavigatorTitleData[status],
  afterIconData: authAfterIconData[status],
  navigator: authNavigatorData[status],
  subNavigator: authSubNavigatorData[status],
  stepLabel: authStepData[status],
});
