import { ImageSourcePropType } from 'react-native';

export enum Types {
  SUBMIT,
  ADD,
  SETSTATUS,
}

export interface ButtonUIProps {
  type: Types;
  title: string;
  afterIcon?: ImageSourcePropType;
  onPress: () => any;
}
