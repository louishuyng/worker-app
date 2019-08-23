import React from 'react';

import { BaseModalProps, ExtraModalLayoutProps } from '../types';
import ModalLayout from '../shared/Layout';

export const withBodyModal = <T extends ExtraModalLayoutProps>(modalData: BaseModalProps) => (ChildComponent: any) => {
  const renderModal = (props: T) => {
    const { onPress, closeModal } = props;
    return (
      <ModalLayout
        onPress={onPress}
        closeModal={closeModal}
        {...modalData}
      >
        <ChildComponent {...props} />
      </ModalLayout>
    );
  };
  return renderModal;
};
