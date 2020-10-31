
/**
 * A .ts file that cointains a user subclass.
 */

import Api from "./api";
import { SHARED_VARIABLES } from 'config';
import * as ApiTypes from './types';
import { UserApiModel } from 'api';

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
            `${SHARED_VARIABLES.API_BASE_URL}/users/create_user`,
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
         * grap user data from response.
         */
        const {
            user,
            user: { subscription }
        } = await response.json();

        /**
         * serialize user data.
         */
        const serializedUser = new UserApiModel({
            id: user._id,
            name: user.user_name,
            email: user.email,
            updatedAt: user.updated_at,
            subscription: subscription &&
                {
                    isSubscribed: subscription.is_subscribed,
                    date: subscription.subscription_date
                },
        });

        /**
         * return final response.
         */
        return {
            kind: 'OK',
            user: serializedUser
        };

    };

};

/**
 * export instance as default.
 */
export default new User();