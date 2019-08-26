import { StyleProp } from 'react-native';
import { colorsType } from 'utils/Theme';

export enum LabelBackgroundCalendar {
  TITLE,
  LOCATION,
  NAVIGATION,
  SELECTED,
}

export interface SelectedAgendaProps {
  marked: any;
  isSelected: boolean;
  text?: string;
  colorText?: colorsType;
  fontText?: number;
}
