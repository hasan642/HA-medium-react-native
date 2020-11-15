/**
 * A function helpers for navigation.
 */
import {
    Navigation,
    ImageSystemSource
} from "react-native-navigation";
import {
    screens,
    Screens
} from './screens';
import {
    color,
    responsiveFontSize
} from 'theme';
import { translate, isRTL } from "i18n";
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * interfaces and types.
 */
interface NavigationIcons {
    MENU_ICON: ImageSystemSource;
    BACK_ICON: ImageSystemSource;
};

/**
 * A function helper that loads and prepares the
 * * required icons image sources.
 */
async function getNavIcons(): Promise<NavigationIcons> {

    /**
     * load icons.
     */
    const icons = await Promise.all([
        Ionicons.getImageSource(
            'md-menu',
            responsiveFontSize(24),
        ),

        Ionicons.getImageSource(
            isRTL() ? 'ios-chevron-forward' : 'ios-chevron-back',
            responsiveFontSize(4),
        ),
    ]);

    /**
     * return icons.
     */
    return {
        MENU_ICON: icons[0],
        BACK_ICON: icons[1],
    };

};

/**
 * A function helper that goes to app.
 */
export function goToApp() {
    Navigation.setRoot({
        root: {
            sideMenu: {
                id: "SIDE_MENU",
                left: {
                    component: {
                        id: screens.SIDE_MENU,
                        name: screens.SIDE_MENU
                    }
                },
                center: {
                    stack: {
                        id: "CENTER_STACK",
                        children: [{
                            component: {
                                id: screens.HOME_SCREEN,
                                name: screens.HOME_SCREEN
                            }
                        }]
                    }
                }
            }
        }
    });
};

/**
 * A function helpers that goes to auth screen.
 */
export function goToAuth() {
    Navigation.setRoot({
        root: {
            stack: {
                id: "Auth",
                children: [{
                    component: {
                        id: screens.AUTH_SCREEN,
                        name: screens.AUTH_SCREEN
                    }
                }]
            }
        }
    });
};

/**
 * A function helper to navigate.
 */
export function goTo(
    componentId: string,
    pushedScreen: Screens,
    props?: { [key: string]: any }
) {
    Navigation.push(
        componentId,
        {
            component: {
                id: screens[pushedScreen],
                name: screens[pushedScreen],
                passProps: props,
            }
        },
    );
};

/**
 * A function helper that set default options for navigation.
 */
export async function setDefaultOptions() {
    const icons = await getNavIcons();

    Navigation.setDefaultOptions({
        statusBar: {
            style: 'dark',
            drawBehind: false,
            translucent: true
        },
        layout: {
            direction: 'ltr',
            backgroundColor: color.light,
            orientation: ['portrait'],
        },
        topBar: {
            animate: true,
            drawBehind: false,
            noBorder: true,
            borderHeight: 0,
            backButton: {
                title: translate('common.back'),
                showTitle: false,
                icon: icons.BACK_ICON
            },
        },
        sideMenu: {
            openGestureMode: 'entireScreen',
        },
        popGesture: true
    })
};