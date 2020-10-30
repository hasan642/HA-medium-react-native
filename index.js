/**
 * the root file.
 */

import { Navigation } from "react-native-navigation";
import {
    registerScreens,
    setMainRoot,
    setDefaultOptions
} from "./src/navigation";
import { init,SHARED_VARIABLES } from "config";

/**
 * execute register screens function.
 */
registerScreens();

/**
 * "registerAppLaunchedListener" event.
 */
Navigation.events().registerAppLaunchedListener(
    () => {

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
        setMainRoot();

    }
);