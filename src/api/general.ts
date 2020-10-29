import Api from "./api";
import * as ApiTypes from './types';

/**
 * A general subclass from Api base class.
 */
class General extends Api {

    /**
     * get user data from facebook.
     */
    getFBUserData = async (accessToken: string): Promise<ApiTypes.GetFBUserData> => {

        /**
         * request "id,name,email, and, profile picture".
         */
        const params = {
            fields: 'id,name,email,picture',
            access_token: accessToken
        };

        /**
         * api call.
         */
        const response = await this.get(
            `https://graph.facebook.com/me`,
            null,
            params
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
        const {
            email,
            name,
            picture
        } = await response.json();
 
        /**
         * return final data.
         */
        return {
            kind: 'OK',
            user: {
                name,
                email,
                profilePicture: (picture.data && picture.data.url) || null
            }
        };

    };

};

/**
 * export an instance.
 */
export default new General();