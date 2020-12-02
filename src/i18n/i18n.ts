import * as RNLocalize from "react-native-localize";
import memoize from "lodash.memoize";
import i18n from "i18n-js";
import { I18nManager } from 'react-native';
import { StorageHelper } from "utils";
import { LanguageModel } from "utils/storage/storage.types";
import RNRestart from 'react-native-restart';

/**
 * supported translations.
 */
const translationGetters = {
    ar: () => require("./locales/ar.json"),
    en: () => require("./locales/en.json"),
    hi: () => require("./locales/hi.json"),
    fr: () => require("./locales/fr.json")
};

/**
 * translate function.
 */
export const translate = memoize(
    (key, config = {}) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

/**
 * set config.
 */
export async function setI18nConfig(): Promise<boolean> {

    /**
     * get current language from storage.
     */
    const currentLanguageFromStorage = await StorageHelper.get('@Language') as LanguageModel;

    const {
        languageTag: deviceLang,
    } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters))
        ||
        fallback;

    /**
     * final lang.
     */
    const language = currentLanguageFromStorage && currentLanguageFromStorage.lang
        ||
        deviceLang;

    /**
     * set i18n-js config.
     */
    i18n.translations = { [language]: translationGetters[language]() };
    i18n.locale = language;

    return true;
};

/**
 * detects if isRTL.
 */
export function isRTL() {
    return I18nManager.isRTL;
};

/**
 * Chnages the app language and restart.
 */
export function changeLanguage(lang: LanguagesKeys, isRTL: boolean) {
    i18n.locale = lang;
    StorageHelper.save(
        '@Language',
        {
            lang,
            isRTL
        }
    );
    I18nManager.forceRTL(lang === 'ar');

    RNRestart.Restart();
};

/**
 * fallback if no available language fits.
 */
export const fallback = {
    languageTag: "en",
    isRTL: false
};

/**
 * Export types.
 */
export type LanguagesKeys = keyof typeof translationGetters;