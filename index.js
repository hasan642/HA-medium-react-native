/**
 * the root file.
 */

import { Navigation } from "react-native-navigation";
import {
    registerScreens,
    setDefaultOptions,
    goToApp,
    goToAuth
} from "./src/navigation";
import { init } from "config";
import { StorageHelper } from "utils";

/**
 * execute register screens function.
 */
registerScreens();

/**
 * "registerAppLaunchedListener" event.
 */
Navigation.events().registerAppLaunchedListener(
    async () => {

        /**
         * execute init function.
         */
        init();

        /**
         * set default options.
         */
        setDefaultOptions();

        /**
         * set main root.
         */
        const isAuthinticated = await StorageHelper.get('@User') !== null;
        if (isAuthinticated === true) {
            goToApp();
        } else {
            goToAuth();
        };

    }
);