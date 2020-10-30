/**
 * A .ts file that contains an i18n config.
 */

import * as RNLocalize from "react-native-localize";
import memoize from "lodash.memoize";
import i18n from "i18n-js";
import { I18nManager } from 'react-native';

/**
 * supported translations.
 */
const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    ar: () => require("./locales/ar.json"),
    en: () => require("./locales/en.json"),
    hi: () => require("./locales/hi.json")
};

/**
 * translate function.
 */
export const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

/**
 * set config.
 */
export function setI18nConfig() {

    // fallback if no available language fits
    const fallback = {
        languageTag: "en",
        isRTL: false
    };

    /**
     * get device language.
     */
    const { languageTag, isRTL } =
        RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
        fallback;

    // clear translation cache
    translate.cache.clear();

    // update layout direction
    I18nManager.forceRTL(isRTL);

    // set i18n-js config
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
};