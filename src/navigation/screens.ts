import { Navigation } from "react-native-navigation";
import { withRedux } from "./providers";
import {
    HomeScreen,
    NotificationsScreen,
    AuthScreen,
    SettingsScreen
} from 'screens';

/**
 * constants.
 */
const prefix = 'com.medium';

/**
 * screen names.
 */
export const screens = {
    HOME_SCREEN: `${prefix}.home`,
    AUTH_SCREEN: `${prefix}.authScreen`,
    NOTIFICATIONS_SCREEN: `${prefix}.notificationsScreen`,
    SETTINGS_SCREEN: `${prefix}.settingsScreen`,
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
        screens.NOTIFICATIONS_SCREEN,
        () => NotificationsScreen
    );

    Navigation.registerComponent(
        screens.SETTINGS_SCREEN,
        () => SettingsScreen
    );
};

/**
 * export type of screens.
 */
export type Screens = keyof typeof screens;