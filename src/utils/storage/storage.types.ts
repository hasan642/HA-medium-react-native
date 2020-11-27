/**
 * A .td file that contains the types of storage.
 */

import { UserProps } from 'api';

/**
 * The keys types.
 */
export type Key = '@User';

/**
 * The storage models.
 */
export interface UserStorageModel extends UserProps { };

/**
 * The type of storage models.
 */
export type StorageModel =
    string &
    UserStorageModel;