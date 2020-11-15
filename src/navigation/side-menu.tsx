import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {
    layout,
    color,
    responsiveFontSize,
    commonStyles
} from '../theme';
import {
    Avatar,
    List
} from 'react-native-paper';
import { Text } from 'components';
import { translate } from 'i18n';
import {
    NavigationComponentProps,
    Navigation
} from 'react-native-navigation';
import {
    goTo,
    Screens
} from 'navigation';
import { CENTER_STACK_SIDE_MENU } from './contants';
import deviceInfoModule from 'react-native-device-info';

/**
 * interfaces and types.
 */
interface SideMenuProps extends NavigationComponentProps {

};
interface ProfileSectionProps {

};
interface SideMenuItemProps {
    title: string;
    onPress: () => void;
    disabled: boolean;
};

/**
 * A function component that shows a side menu.
 */
function SideMenu(props: SideMenuProps) {

    /**
     * state.
     */
    const [selectedScreen, setSelectedScreen] = useState<Screens>('HOME_SCREEN');

    /**
     * navigate to screen.
     */
    const navigateTo = (screenName: Screens) => {

        /**
         * update selected screen.
         */
        setSelectedScreen(screenName);

        /**
         * close side menu first.
         */
        Navigation.mergeOptions(props.componentId, {
            sideMenu: {
                left: {
                    visible: false
                }
            }
        });

        /**
         * navigate to screen.
         */
        goTo(
            CENTER_STACK_SIDE_MENU,
            screenName
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ProfileSection />

            <ScrollView style={commonStyles.flex}>
                <SideMenuItem
                    title={translate('screens.home')}
                    onPress={() => navigateTo('HOME_SCREEN')}
                    disabled={selectedScreen === 'HOME_SCREEN'}
                />

                <SideMenuItem
                    title={translate('screens.settings')}
                    onPress={() => navigateTo('SETTINGS_SCREEN')}
                    disabled={selectedScreen === 'SETTINGS_SCREEN'}
                />
            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
};

/**
 * functions.
 */
function ProfileSection(props: ProfileSectionProps) {
    return (
        <View style={styles.topSection}>
            <View>
                <Avatar.Image
                    size={layout.width / 4}
                    source={{ uri: 'data:image/png;base64,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' }}
                />

                <Text style={styles.name}>
                    {'name'}
                </Text>
            </View>
        </View>
    );
};

function SideMenuItem({ title, onPress, disabled }: SideMenuItemProps) {
    return (<List.Item
        title={title}
        onPress={onPress}
        disabled={disabled}
    />);
};

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.version}>
                {deviceInfoModule.getReadableVersion()}
            </Text>
        </View>
    );
};

/**
 * styles.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    topSection: {
        alignItems: 'flex-start',
        paddingLeft: 16,
        backgroundColor: color.light,
        paddingVertical: 8,
    },
    name: {
        color: color.dark,
        fontSize: responsiveFontSize(2.5),
        marginTop: 8,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    version: {
        color: color.dark,
        fontWeight: '700',
    },
    footer: {
        paddingLeft: 16
    }
});

/**
 * export as default.
 */
export default SideMenu;