import { Navigation } from "react-native-navigation";

/**
 * import screens.
 */
import { HomeScreen } from 'screens';
import SideMenu from "./side-menu";
import { AuthScreen } from 'screens';

/**
 * constants.
 */
const prefix = 'com.medium';

/**
 * screen names.
 */
export const screens = {
    HOME: `${prefix}.home`,
    SIDE_MENU: `${prefix}.sideMenu`,
    AUTH_SCREEN: `${prefix}.authScreen`
};

/**
 * A function that registeres screens.
 */
export function registerScreens() {
    Navigation.registerComponent(
        screens.HOME,
        () => HomeScreen
    );

    Navigation.registerComponent(
        screens.SIDE_MENU,
        () => SideMenu
    );

    Navigation.registerComponent(
        screens.AUTH_SCREEN,
        () => AuthScreen
    );
};