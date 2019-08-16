export enum Types {
  SUBMIT,
  ADD,
  SETSTATUS,
}

export interface ButtonUIProps {
  type: Types;
  title: string;
  onPress: () => any;
}
