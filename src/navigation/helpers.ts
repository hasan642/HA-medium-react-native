import {
    Navigation,
    ImageSystemSource,
    LayoutTabsChildren
} from "react-native-navigation";
import {
    screens,
    Screens
} from './screens';
import {
    color,
    responsiveFontSize
} from 'theme';
import {
    BOTTOM_TABS_ID,
    AUTH_STACK_ID,
    HOME_STACK_ID,
    SETTINGS_STACK_ID,
    PROFILE_STACK_ID
} from "./contants";
import ADIcons from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';

/**
 * interfaces and types.
 */
interface NavigationIcons {
    HOME_ICON: ImageSystemSource;
    SETTINGS_ICON: ImageSystemSource;
    PROFILE_ICON: ImageSystemSource;
};

/**
 * A function helper that loads and prepares the
 * * required icons image sources.
 * 
 * @TODO: save prepared icons in variable to call this function one time.
 */
async function getNavIcons(): Promise<NavigationIcons> {

    /**
     * load icons.
     */
    const icons = await Promise.all([
        ADIcons.getImageSource(
            'home',
            responsiveFontSize(3.5),
        ),

        ADIcons.getImageSource(
            'setting',
            responsiveFontSize(3.5),
        ),

        FAIcon.getImageSource(
            'user-o',
            responsiveFontSize(3.5),
        ),
    ]);

    /**
     * return icons.
     */
    return {
        HOME_ICON: icons[0],
        SETTINGS_ICON: icons[1],
        PROFILE_ICON: icons[2],
    };

};

/**
 * A function helper that goes to app.
 */
export async function goToApp() {

    /**
     * grap icons from loaded navigation icons.
     */
    const {
        HOME_ICON,
        SETTINGS_ICON,
        PROFILE_ICON
    } = await getNavIcons();

    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: BOTTOM_TABS_ID,
                children: [
                    createTabStack(
                        HOME_STACK_ID,
                        'HOME_SCREEN',
                        HOME_ICON
                    ),
                    createTabStack(
                        PROFILE_STACK_ID,
                        'PROFILE_SCREEN',
                        PROFILE_ICON
                    ),
                    createTabStack(
                        SETTINGS_STACK_ID,
                        'SETTINGS_SCREEN',
                        SETTINGS_ICON
                    ),
                ]
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
                id: AUTH_STACK_ID,
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
export function setDefaultOptions() {
    Navigation.setDefaultOptions({
        statusBar: {
            style: 'dark',
            drawBehind: false,
            translucent: true
        },
        layout: {
            direction: 'locale',
            orientation: ['portrait'],
        },
        topBar: {
            visible: false
        },
        bottomTabs: {
            animate: true,
            drawBehind: false,
            hideShadow: false,
            elevation: 1,
            hideOnScroll: true
        },
        bottomTab: {
            animateBadge: true,
            selectTabOnPress: true,
            selectedIconColor: color.dark,
            iconColor: color.silver,
            disableIconTint: true,
            iconInsets: {
                top: 4
            }
        },
        modal: {
            swipeToDismiss: true
        },
        popGesture: true,
    })
};

/**
 * Creates tab stack.
 */
export function createTabStack(
    stackId: string,
    screenName: Screens,
    icon: ImageSystemSource,
): LayoutTabsChildren {
    return {
        stack: {
            id: stackId,
            children: [
                {
                    component: {
                        id: screens[screenName],
                        name: screens[screenName]
                    }
                }
            ],
            options: {
                bottomTab: { icon }
            }
        }
    }
};

/**
 * Shows a modal.
 */
export function showModal(
    screenName: Screens,
    props?: { [key: string]: any }
) {
    Navigation.showModal({
        component: {
            id: screens[screenName],
            name: screens[screenName],
            passProps: props
        }
    });
};

/**
 * Dismisses moal.
 */
export function dismissModal(componentId: string) {
    Navigation.dismissModal(componentId);
};

/**
 * Goes back.
 */
export function goBack(componentId: string) {
    Navigation.pop(componentId);
};