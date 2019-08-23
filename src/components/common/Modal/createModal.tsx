import CancelledJob from './JobCancelled';
import SkipSignature from './SkipSignature';
import SetStatus from './SetStatus';

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
}

export interface SkipSignatureProps extends ExtraModalLayoutProps {
  reasons: string[] // chưa rõ dữ liệu ở đây
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
})(SetStatus);

const SkipSignatureModal = withBodyModal<SkipSignatureProps>({
  title: getString('modal', 'skipSignature'),
  submitActionName: getString('modal', 'ok'),
  cancelActionName: getString('modal', 'cancel'),
})(SkipSignature);

export const createModal = {
  [ModalTypes.CANCELLED_JOB]: CancelledJobModal,
  [ModalTypes.SET_STATUS]: SetStatusModal,
  [ModalTypes.SKIP_SIGNATURE]: SkipSignatureModal,
};
