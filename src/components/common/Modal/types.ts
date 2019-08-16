export interface ModalUIProps {
  submitActionName: string;
  title?: string;
  modalName: string;
  onPress: () => void;
}

export interface ModalUIState {
  isModalVisible: boolean;
}
