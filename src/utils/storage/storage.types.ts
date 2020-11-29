/**
 * A .td file that contains the types of storage.
 */

import { UserProps } from 'api';
import { LanguagesKeys } from 'i18n';

/**
 * The keys types.
 */
export type Key = '@User' |
    '@Language';

/**
 * The storage models.
 */
export interface UserStorageModel extends UserProps { };

/**
 * The language model.
 */
export interface LanguageModel {
    lang: LanguagesKeys;
    isRTL: boolean;
};

/**
 * The type of storage models.
 */
export type StorageModel =
    string &
    string |
    UserStorageModel |
    LanguageModel;