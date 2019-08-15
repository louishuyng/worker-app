import LocalizedStrings from 'react-native-localization';

const strings: any = new LocalizedStrings({
  en: {
    DEMO: 'DEMO',
  },
});

export const getString = (str: string) => {
  return strings[str];
};
