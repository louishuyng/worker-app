
import 'styled-components';

import { colorsType } from 'utils/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: colorsType,
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
