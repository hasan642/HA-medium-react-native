/**
 * A .ts file that contains a config file.
 */

import { TwitterLogin } from "react-native-login-twitter";
import { GoogleSignin } from "@react-native-community/google-signin";
import { setI18nConfig } from "i18n";
import { NativeModules } from 'react-native';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import RNAsyncStorage from '@react-native-community/async-storage';

/**
 * setup reacttotron config.
 */
function setupReactoTron() {

    /**
     * grabs the ip address, to run physical Android device.
     */
    const scriptURL = NativeModules.SourceCode.scriptURL;
    const scriptHostname = scriptURL.split('://')[1].split(':')[0];

    /**
     * configure "Reactotron".
     */
    Reactotron
        .configure({ host: scriptHostname })
        .use(trackGlobalErrors(null))
        .setAsyncStorageHandler(RNAsyncStorage)
        .useReactNative({
            storybook: true
        })
        .connect();
};

export function init() {

    /**
     * setup "reactotron".
     */
    setupReactoTron();

    /**
     * init twitter.
     */
    TwitterLogin.init(
        'oRklIZZz3YYrznKo1ib7cM2CC',
        'oS1jFlAew0hupcAiGKNlHYyMfaV6PviFD4T4oXWe6Yu4I8CsNI'
    );

    /**
     * init google.
     * 
     * without any config, bz we are using googeSignin
     * * with "firebase", so data will be retrieved from 
     * * firebase config file.
     */
    GoogleSignin.configure();

    /**
     * set "i18n" config.
     */
    setI18nConfig();
};