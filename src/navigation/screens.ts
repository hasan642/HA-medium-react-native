import { Navigation } from "react-native-navigation";

/**
 * import screens.
 */
import { HomeScreen } from '../screens/home-screen';

/**
 * constants.
 */
const prefix = 'com.app';

/**
 * screen names.
 */
export const screens = {
    HOME: `${prefix}.home`
};

/**
 * A function that registeres screens.
 */
export function registerScreens() {
    Navigation.registerComponent(
        screens.HOME,
        () => HomeScreen
    );
};