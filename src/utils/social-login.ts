/**
 * A .ts file that contains a social login.
 */

import {
    LoginManager,
    AccessToken
} from "react-native-fbsdk";
import General from "./general";

/**
 * A functoion to continue with FB.
 */
async function continueWithFB() {

    /**
     * request permissions from user.
     */
    const permissions = await LoginManager.logInWithPermissions(requestedPermissions);

    /**
     * check if cancelled or not.
     */
    if (permissions.isCancelled) {
        return General.showAlert(
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
    }

    /**
     * check if all permissions granted or not.
     */
    else if (permissions.grantedPermissions.length !== requestedPermissions.length) {
        return General.showAlert(
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
    };

    /**
     * here we are sure user does not cancel facebook login
     * * and all permissions are not granted.
     */
    const accessFBToken = await AccessToken.getCurrentAccessToken();
    console.log('access is', accessFBToken);

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