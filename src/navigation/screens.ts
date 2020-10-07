import { Navigation } from "react-native-navigation";

/**
 * import screens.
 */
import { HomeScreen } from '../screens/home-screen';
import SideMenu from "./side-menu";

/**
 * constants.
 */
const prefix = 'com.app';

/**
 * screen names.
 */
export const screens = {
    HOME: `${prefix}.home`,
    SIDE_MENU: `${prefix}.sideMenu`
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
};