import React from 'react';
import { NavigationComponentProps } from 'react-native-navigation';
import { View } from 'react-native';
import styles from './styles';
import { Header } from 'components';
import { translate } from 'i18n';

/**
 * type checking.
 */
interface ProfileScreenProps extends NavigationComponentProps {

};

/**
 * A function component that shows a profile screen.
 */
function ProfileScreen(props: ProfileScreenProps) {
    return (
        <View style={styles.container}>
            <Header
                title={translate('screens.profile')}
            />
        </View>
    );
};

/**
 * export as default.
 */
export default ProfileScreen;