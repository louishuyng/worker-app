import CancelledJob from './JobCancelled';
import SkipSignature from './SkipSignature';
import SetEnRoute from './SetStatus';
import { ImageSourcePropType } from 'react-native';

import { ModalTypes } from './models/modalModels';
import { getString } from 'locales';
import { withBodyModal } from './hoc/withBodyModal';
import { ExtraModalLayoutProps } from './types';

export interface JobCancelledProps extends ExtraModalLayoutProps {
  jobName: string;
  location: string;
  reason: string;
}

export interface SetStatusProps extends ExtraModalLayoutProps {
  statusLabel: string
  mainIconSource: ImageSourcePropType,
}

const CancelledJobModal = withBodyModal<JobCancelledProps>({
  title: getString('modal', 'jobCancelledTitle'),
  submitActionName: getString('modal', 'ok'),
  cancelActionName: null,
})(CancelledJob);

const SetStatusModal = withBodyModal<SetStatusProps>({
  title: null,
  submitActionName: getString('modal', 'set'),
  cancelActionName: getString('modal', 'cancel'),
})(SetEnRoute);

const SkipSignatureModal = withBodyModal({
  title: getString('modal', 'skipSignature'),
  submitActionName: getString('modal', 'ok'),
  cancelActionName: getString('modal', 'cancel'),
})(SkipSignature);

export const createModal = {
  [ModalTypes.CANCELLED_JOB]: CancelledJobModal,
  [ModalTypes.SET_STATUS]: SetStatusModal,
  [ModalTypes.SKIP_SIGNATURE]: SkipSignatureModal,
};
