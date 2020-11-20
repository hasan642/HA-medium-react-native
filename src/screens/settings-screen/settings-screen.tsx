import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import {
    Header,
    Text
} from 'components';
import styles from './styles';
import { translate } from 'i18n';
import { NavigationComponentProps } from 'react-native-navigation';
import { commonStyles } from 'theme';
import deviceInfoModule from 'react-native-device-info';

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