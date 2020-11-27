import { Navigation } from "react-native-navigation";
import { withRedux } from "./providers";
import {
    HomeScreen,
    AuthScreen,
    SettingsScreen,
    ProfileScreen,
    UpdateProfileScreen
} from 'screens';

/**
 * constants.
 */
const prefix = 'com.medium';
const modalPrefix = `${prefix}.modal`;

/**
 * screen names.
 */
export const screens = {
    HOME_SCREEN: `${prefix}.home`,
    AUTH_SCREEN: `${prefix}.authScreen`,
    SETTINGS_SCREEN: `${prefix}.settingsScreen`,
    PROFILE_SCREEN: `${prefix}.profileScreen`,
    UPDATE_PROFILE: `${modalPrefix}.updateProfileScreen`
};

/**
 * A function that registeres screens.
 */
export function registerScreens() {
    Navigation.registerComponent(
        screens.HOME_SCREEN,
        () => withRedux(HomeScreen),
        () => HomeScreen
    );

    Navigation.registerComponent(
        screens.AUTH_SCREEN,
        () => withRedux(AuthScreen),
        () => AuthScreen
    );

    Navigation.registerComponent(
        screens.SETTINGS_SCREEN,
        () => SettingsScreen
    );

    Navigation.registerComponent(
        screens.PROFILE_SCREEN,
        () => ProfileScreen
    );

    Navigation.registerComponent(
        screens.UPDATE_PROFILE,
        () => withRedux(UpdateProfileScreen),
        () => UpdateProfileScreen
    );
};

/**
 * export type of screens.
 */
export type Screens = keyof typeof screens;