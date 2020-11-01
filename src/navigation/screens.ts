import { Navigation } from "react-native-navigation";
import { withRedux } from "./providers";

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
        () => withRedux(HomeScreen),
        () => HomeScreen
    );

    Navigation.registerComponent(
        screens.SIDE_MENU,
        () => withRedux(SideMenu),
        () => SideMenu
    );

    Navigation.registerComponent(
        screens.AUTH_SCREEN,
        () => withRedux(AuthScreen),
        () => AuthScreen
    );
};