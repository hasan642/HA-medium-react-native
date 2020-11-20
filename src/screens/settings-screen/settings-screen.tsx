import React from 'react';
import { ScrollView, View } from 'react-native';
import { ListItem, Header } from 'components';
import styles from './styles';
import { translate } from 'i18n';
import {
    NavigationComponentProps,
    Options
} from 'react-native-navigation';
import { commonStyles } from 'theme';

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
     * Handles profile 
     */
    const handlePressProfile = () => {

    };

    return (
        <View style={styles.container}>
            <Header
                title={translate('screens.settings')}
            />

            <ScrollView style={commonStyles.flex}>
                <ListItem
                    title={translate('settingsScreen.profile')}
                    onPress={handlePressProfile}
                />
            </ScrollView>


        </View>
    );
};

/**
 * export as default.
 */
export default SettingsScreen;