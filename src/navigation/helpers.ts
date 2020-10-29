/**
 * A function helpers for navigation.
 */
import { Navigation } from "react-native-navigation";
import { screens } from './screens';
import { color } from "theme";

/**
 * A function helper that sets the main navigation route.
 */
export function setMainRoot() {
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
                                id: screens.AUTH_SCREEN,
                                name: screens.AUTH_SCREEN
                            }
                        }]
                    }
                }
            }
        }
    });
};

/**
 * A function helper that set default options for navigation.
 */
export function setDefaultOptions() {
    Navigation.setDefaultOptions({
        statusBar: {
            style: 'dark',
            drawBehind: false,
            translucent: true
        },
        layout: {

            /**
             * will be handled after "i18n" modal
             * * added.
             */
            direction: 'rtl',

            backgroundColor: color.light,
            orientation: ['portrait']
        },
        topBar: {
            animate: true,
            hideOnScroll: true,
            drawBehind: false
        },
        sideMenu: {
            openGestureMode: 'entireScreen'
        },
        popGesture: true
    })
};