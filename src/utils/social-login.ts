/**
 * A .ts file that contains a social login.
 */

import {
    LoginManager,
    AccessToken
} from "react-native-fbsdk";
import General from "./general";
import { GeneralApi } from "api";
import { GetFBUserData } from "api/types";

/**
 * A functoion to continue with FB.
 */
async function continueWithFB(): Promise<GetFBUserData> {

    /**
     * request permissions from user.
     */
    const permissions = await LoginManager.logInWithPermissions(requestedPermissions);

    /**
     * check if cancelled or not.
     */
    if (permissions.isCancelled) {
        General.showAlert(
            null,
            'user cancel action',
            [
                {
                    text: 'ok',
                    style: 'cancel'
                }
            ],
            {
                cancelable: true
            }
        );

        return {
            kind: 'REJECTED'
        };
    }

    /**
     * check if all permissions granted or not.
     */
    else if (permissions.grantedPermissions.length !== requestedPermissions.length) {
        General.showAlert(
            null,
            'permissions were not granted',
            [
                {
                    text: 'ok',
                    style: 'cancel'
                }
            ],
            {
                cancelable: true
            }
        );
        
        return {
            kind: 'REJECTED'
        };
    };

    /**
     * here we are sure user does not cancel facebook login
     * * and all permissions are not granted.
     */
    const { accessToken } = await AccessToken.getCurrentAccessToken();

    /**
     * get userdata by access token.
     */
    const userData = await GeneralApi.getFBUserData(accessToken);

    /**
     * return final userdata.
     */
    return userData;
};

/**
 * contsants.
 */
const requestedPermissions = [
    'public_profile',
    'email'
];

/**
 * export all functions.
 */
export default {
    continueWithFB,
};