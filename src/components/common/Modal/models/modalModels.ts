import { getString } from 'locales';

export enum ModalTypes {
  CANCELLED_JOB,
  SKIP_SIGNATURE,
  SET_STATUS,
}

type ModalModelData = { [key in ModalTypes]: string | null };

export const modalTitleData: ModalModelData = {
  [ModalTypes.CANCELLED_JOB]: getString('modal', 'jobCancelledTitle'),
  [ModalTypes.SKIP_SIGNATURE]: getString('modal', 'skipSignature'),
  [ModalTypes.SET_STATUS]: null,
};
