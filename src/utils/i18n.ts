import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from 'react-native';
import {USER_LANGUAGE} from '@/config/constants';
import {languagesList} from '@/languages/index';
const languageCodeList = () => {
  const result: Record<string, any> = {};

  languagesList.forEach(language => {
    result[language.value] = language.data;
  });

  return result;
};
i18next
  .use({
    init: Function.prototype,
    type: 'languageDetector',
    async: true, // flags below detection to be async
    detect: async (callback: (arg: string) => void) => {
      const deviceLang = RNLocalize.getLocales()[0].languageCode;
      const userLang = await AsyncStorage.getItem(USER_LANGUAGE);

      const currentLang = userLang
        ? userLang
        : languagesList.some(x => x.value === deviceLang)
        ? deviceLang
        : 'en';
      callback(currentLang);
    },
    cacheUserLanguage: () => {},
  })
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: I18nManager.isRTL ? 'ar' : 'en',
    resources: languageCodeList() as any,
    react: {
      useSuspense: false,
    },
  });

export default i18next;
