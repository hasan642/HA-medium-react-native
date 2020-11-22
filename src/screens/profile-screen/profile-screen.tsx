import React from 'react';
import { NavigationComponentProps } from 'react-native-navigation';
import { View } from 'react-native';
import styles from './styles';
import {
    Header,
    Image,
    Icon
} from 'components';
import { translate } from 'i18n';
import { Appbar } from 'react-native-paper';

/**
 * type checking.
 */
interface ProfileScreenProps extends NavigationComponentProps {

};
interface CoverPhotoProps {
    onCameraPress: () => void;
};

/**
 * A function component that shows a profile screen.
 */
function ProfileScreen(props: ProfileScreenProps) {

    const handleEditProfile = () => {

    };

    const handleCameraPress = () => {
console.log('fff')
    };

    return (
        <View style={styles.container}>
            <Header
                title={translate('screens.profile')}
            >
                <Appbar.Action

                    /**
                     * to resolve type script issue, that requires the whole
                     * * of component props.
                     */
                    {...{} as any}

                    icon={'account-edit'}
                    onPress={handleEditProfile}
                />
            </Header>

            <CoverPhoto
                onCameraPress={handleCameraPress}
            />
        </View>
    );
};

/**
 * functions.
 */
function CoverPhoto({
    onCameraPress
}: CoverPhotoProps) {
    return (
        <View style={styles.coverPhoto}>
            <Image
                src={{ uri: 'https://cultivatedculture.com/wp-content/uploads/2019/05/Chromatic-LinkedIn-Cover-Photo-Background.png' }}
                style={{
                    flex: 1
                }}
                resizeMode='stretch'
            />

            <Icon
                icon={'camera'}
                handlePress={onCameraPress}
                style={styles.cameraIcon}
                size={24}
            />
        </View>
    );
};

/**
 * export as default.
 */
export default ProfileScreen;