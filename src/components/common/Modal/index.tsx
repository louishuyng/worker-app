import { createModal } from './createModal';
import { ModalTypes } from './models/modalModels';

export const SetStatusModal = createModal[ModalTypes.SET_STATUS];
export const CancelledJobModal = createModal[ModalTypes.CANCELLED_JOB];
export const SkipSignatureModal = createModal[ModalTypes.SKIP_SIGNATURE];
