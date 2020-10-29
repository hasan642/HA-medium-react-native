import { TwitterLogin } from "react-native-login-twitter";
import { GoogleSignin } from "@react-native-community/google-signin";

/**
 * A file for setup and init some things.
 */
export function init() {

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

};