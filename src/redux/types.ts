/**
 * The types of redux.
 */

import { UserApiModel } from "api";

/**
 * The common state.
 */
interface Common {
    loading: boolean;
    error: string;
    success: boolean;
};

/**
 * the user state.
 */
export interface UserState extends Common {
    user: UserApiModel;
};