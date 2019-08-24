import 'styled-components';

import { colorsType, fontFamilyType } from 'utils/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: colorsType;
    fontFamily: fontFamilyType;
    background: string;
    btnPrimary: string;
    btnPrimaryFont: string;
    btnPrimaryLight: string;
    btnPrimaryLightFont: string;
    textDisabled: string;
    btnDisabled: string;
    fontColor: string;
    tintColor: string;
  }
}
