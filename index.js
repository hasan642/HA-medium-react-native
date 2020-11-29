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
import { reduxStore } from "redux";
import { cacheUser } from "redux/slices";

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
        await init();

        /**
         * set default options.
         */
        setDefaultOptions();

        /**
         * set main root.
         */
        const user = await StorageHelper.get('@User');
        if (user !== null) {

            /**
             * save user data to storage.
             */
            reduxStore.dispatch(cacheUser(user));

            /**
             * navigate to app.
             */
            goToApp();

        } else {
            goToAuth();
        };

    }
);