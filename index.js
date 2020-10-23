/**
 * the root file.
 */
import { Navigation } from "react-native-navigation";
import {
    registerScreens,
    screens
} from "./src/navigation";

/**
 * execute register screens function.
 */
registerScreens();

/**
 * "registerAppLaunchedListener" event.
 */
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            sideMenu: {
                id: "sideMenu",
                left: {
                    component: {
                        id: screens.SIDE_MENU,
                        name: screens.SIDE_MENU
                    }
                },
                center: {
                    stack: {
                        id: "App",
                        children: [{
                            component: {
                                id: screens.HOME,
                                name: screens.HOME
                            }
                        }]
                    }
                }
            }
        }
    })
});