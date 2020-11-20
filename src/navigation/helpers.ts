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
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {
    BOTTOM_TABS_ID,
    AUTH_STACK_ID
} from "./contants";

/**
 * interfaces and types.
 */
interface NavigationIcons {
    HOME_ICON: ImageSystemSource;
    SETTING_ICON: ImageSystemSource;
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
        AntDesignIcons.getImageSource(
            'home',
            responsiveFontSize(3.5),
        ),

        AntDesignIcons.getImageSource(
            'setting',
            responsiveFontSize(3.5),
        ),
    ]);

    /**
     * return icons.
     */
    return {
        HOME_ICON: icons[0],
        SETTING_ICON: icons[1],
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
        SETTING_ICON
    } = await getNavIcons();

    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: BOTTOM_TABS_ID,
                children: [
                    createTabStack('HOME_SCREEN', HOME_ICON),
                    createTabStack('SETTINGS_SCREEN', SETTING_ICON),
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
        popGesture: true,
    })
};

/**
 * Creates tab stack.
 */
export function createTabStack(
    screenName: Screens,
    icon: ImageSystemSource,
): LayoutTabsChildren {
    return {
        stack: {
            id: screens.HOME_SCREEN,
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