
/**
 * A .ts file that cointains a user subclass.
 */

import Api from "./api";
import { BASE_URL } from "./default";
import * as ApiTypes from './types';

/**
 * A user sub-class to handle user apis.
 */
class User extends Api {

    /**
     * create new user.
     */
    createNewUser = async (
        userName: string,
        email: string
    ): Promise<ApiTypes.CreateUserData> => {

        /**
         * create response.
         */
        const response = await this.post(
            `${BASE_URL}users/create_user`,
            {
                user_name: userName,
                email: email
            }
        );

        /**
         * handle if response is not ok.
         */
        if (!response.ok) {
            return {
                kind: 'REJECTED',
                error: ApiTypes.getError(response.status)
            };
        };

        /**
         * return final response.
         */
        const res = await response.json();

    };

};

/**
 * export instance as default.
 */
export default new User();