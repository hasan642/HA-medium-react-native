/**
 * the root file.
 */
import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/navigation";
import { screens } from "./src/navigation/screens";

/**
 * execute register screens function.
 */
registerScreens();

/**
 * "registerAppLaunchedListener" event.
 */
Navigation.events().registerAppLaunchedListener(() => {
    console.log('AAAAA')
    Navigation.setRoot({
        root: {
            component: {
                id:screens.HOME,
                name:screens.HOME
            }
        }
    });
});