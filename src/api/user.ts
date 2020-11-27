
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
     * Create new user.
     */
    createNewUser = async (
        userName: string,
        email: string,
        profilePhoto: string
    ): Promise<ApiTypes.CreateUserData> => {

        /**
         * create response.
         */
        const response = await this.post(
            `${SHARED_VARIABLES.API_BASE_URL}/users/create_user`,
            {
                user_name: userName,
                email: email,
                profile_picture: profilePhoto
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
         * grap user from response.
         */
        const { user } = await response.json();

        /**
         * serialize user data.
         */
        const serializedUser = new UserApiModel({
            id: user._id,
            name: user.user_name,
            email: user.email,
            updatedAt: user.updated_at,
            bio: user.bio,
            coverPhoto: `${SHARED_VARIABLES.API_BASE_URL}/${user.cover_picture}`,
            profilePicture: `${SHARED_VARIABLES.API_BASE_URL}/${user.profile_picture}`,
            subscription: user.subscription,
        });

        /**
         * return final response.
         */
        return {
            kind: 'OK',
            user: serializedUser
        };

    };

    /**
     * Updates user by email.
     */
    updateUser = async (user: Partial<UserApiModel>) => {

        /**
         * update user response.
         */
        const response = await this.put(
            `${SHARED_VARIABLES.API_BASE_URL}/users/update_user`,
            {
                user_name: user.name,
                email: user.email,
                profile_picture: user.profilePicture,
                cover_picture: user.coverPhoto,
                bio: user.bio,
                subscription: user.subscription
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
        const { updatedUser } = await response.json();

        /**
         * serialize upadted user data.
         */
        const serializedUpdatedUser = new UserApiModel({
            id: updatedUser._id,
            name: updatedUser.user_name,
            email: updatedUser.email,
            updatedAt: updatedUser.updated_at,
            bio: updatedUser.bio,
            coverPhoto: `${SHARED_VARIABLES.API_BASE_URL}/${updatedUser.cover_picture}`,
            profilePicture: `${SHARED_VARIABLES.API_BASE_URL}/${updatedUser.profile_picture}`,
            subscription: updatedUser.subscription,
        });

        /**
         * return final response.
         */
        return {
            kind: 'OK',
            user: serializedUpdatedUser
        };
    };

};

/**
 * export instance as default.
 */
export default new User();