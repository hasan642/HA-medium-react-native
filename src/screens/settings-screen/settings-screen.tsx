import React, { useState } from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import {
    Header,
    Text,
    ListItem
} from 'components';
import styles from './styles';
import { translate } from 'i18n';
import { NavigationComponentProps } from 'react-native-navigation';
import { commonStyles } from 'theme';
import deviceInfoModule from 'react-native-device-info';
import { StorageHelper } from 'utils';
import { goToAuth } from 'navigation';
import { Switch } from 'react-native-paper';

/**
 * Type checking.
 */
interface SettingsScreenProps extends NavigationComponentProps {

};

/**
 * A function component that shows a settings screen.
 */
function SettingsScreen({ componentId }: SettingsScreenProps) {

    /**
     * state.
     */
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    /**
     * Handles logout user.
     */
    const handleLogout = async () => {

        /**
         * clear user storage.
         */
        await StorageHelper.clear('@User')
        
        /**
         * go to auth.
         */
        goToAuth();

    };

    /**
     * Handles chnaging dark mode.
     */
    const handleChangeDarkMode = (nextVal: boolean) => {
        setIsDarkModeEnabled(nextVal);
    };

    return (
        <View style={styles.container}>
            <Header
                title={translate('screens.settings')}
            />

            <ScrollView style={commonStyles.flex}>
                <ListItem
                    title={translate('settingsScreen.notifications')}
                    rightIcon={<Switch
                        value={isDarkModeEnabled}
                        onValueChange={handleChangeDarkMode}
                    />}
                />

                <ListItem
                    title={translate('settingsScreen.darkMode')}
                    rightIcon={<Switch
                        value={isDarkModeEnabled}
                        onValueChange={handleChangeDarkMode}
                    />}
                />

                <ListItem
                    leftIcon='logout'
                    leftPaperIcon
                    title={translate('settingsScreen.logout')}
                    onPress={handleLogout}
                />
            </ScrollView>

            <Text style={styles.footerTxt}>
                {deviceInfoModule.getReadableVersion()}
            </Text>
        </View>
    );
};

/**
 * export as default.
 */
export default SettingsScreen;