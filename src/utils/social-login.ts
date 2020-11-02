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
import {
    GoogleSignin,
    User as GoogleUser
} from "@react-native-community/google-signin";
import general from "./general";
import { translate } from "i18n";
import {
    TwitterLogin,
    User as TwitterUser
} from "react-native-login-twitter";

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
 * A function helper that handles google signin.
 */
async function continueWithGoogle(): Promise<GoogleUser> {
    try {

        /**
         * check if there is no "googlePlayServices".
         */
        const hasServices = await GoogleSignin.hasPlayServices();
        if (!hasServices) {
            general.showToast(translate('noGServices'));
            return null;
        };

        /**
         * get google user.
         */
        const user = await GoogleSignin.signIn();
        return user;

    } catch (e) {
        console.log('error in continueWithGoogle', e);
        return null;
    };
};

/**
 * A function helper that handles login with Twitter.
 */
async function continueWithTwitter(): Promise<TwitterUser> {
    try {
        const user = TwitterLogin.logIn();
        return user;
    } catch (e) {
        console.log('error in continueWithTwitter', e);
        return null;
    };
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
    continueWithGoogle,
    continueWithTwitter,
};