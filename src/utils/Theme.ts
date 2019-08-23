export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export interface colorsType {
  white: string;
  alizarin: string;
  iron: string;
  paleSky: string;
  skyBlue: string;
  whiteGray: string;
  chateauGreen: string;
  dusk: string;
  green: string;
  greenBlue: string;
  mediumGray: string;
  paleGray: string;
  lightBackground: string;
  lightBackgroundLight: string;
  darkBackground: string;
  darkBackgroundLight: string;
  capeCod: string;
  aquaHaze: string;
}

export const colors: colorsType = {
  white: '#FFFFFF',
  alizarin: '#e74c3c',
  iron: '#DBDEDE',
  paleSky: '#6F7780',
  skyBlue: '#069ccd',
  whiteGray: '#f7f6f3',
  chateauGreen: '#34A466',
  dusk: 'rgb(65,77,107)',
  green: 'rgb(29,211,168)',
  greenBlue: 'rgb(36,205,151)',
  mediumGray: 'rgb(134,154,183)',
  paleGray: 'rgb(221,226,236)',
  lightBackground: 'white',
  lightBackgroundLight: '#f7f6f3',
  darkBackground: '#323739',
  darkBackgroundLight: '#393241',
  capeCod: '#3A3C3E',
  aquaHaze: '#EDF1F5',
};

const theme = {
  light: {
    background: colors.lightBackground,
    btnPrimary: colors.skyBlue,
    btnPrimaryFont: 'white',
    btnPrimaryLight: colors.whiteGray,
    btnPrimaryLightFont: 'black',
    textDisabled: '#969696',
    btnDisabled: 'rgb(224,224,224)',
    fontColor: 'black',
    tintColor: '#333333',
    colors,
  },
  dark: {
    background: colors.darkBackground,
    btnPrimary: colors.skyBlue,
    btnPrimaryFont: 'white',
    btnPrimaryLight: colors.whiteGray,
    btnPrimaryLightFont: 'black',
    textDisabled: '#969696',
    btnDisabled: 'rgb(224,224,224)',
    fontColor: 'white',
    tintColor: '#a3a3a3',
    colors,
  },
};

export const createTheme = (type = ThemeType.LIGHT) => {
  switch (type) {
    case ThemeType.LIGHT:
      return theme.light;
    case ThemeType.DARK:
      return theme.dark;
  }
};
