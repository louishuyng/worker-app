export interface BaseModalProps {
  title: string | null;
  submitActionName: string;
  cancelActionName: string | null;
}

export interface ExtraModalLayoutProps {
  onPress: () => void;
  closeModal: () => void;
}
export interface ModalUIProps extends BaseModalProps, ExtraModalLayoutProps {
  children: any;
}
