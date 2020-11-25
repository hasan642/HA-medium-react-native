import React, { useState } from 'react';
import { NavigationComponentProps } from 'react-native-navigation';
import {
    View,
    LayoutChangeEvent
} from 'react-native';
import styles from './styles';
import {
    Header,
    Image,
    Icon,
    Text
} from 'components';
import { translate } from 'i18n';
import {
    Appbar,
    Card,
    Title
} from 'react-native-paper';
import { commonStyles } from 'theme';
import { showModal } from 'navigation';

/**
 * type checking.
 */
interface ProfileScreenProps extends NavigationComponentProps {

};
interface CoverPhotoProps {
    onCameraPress: () => void;
};
interface UserProfileCardProps {
    onLayout: (e: LayoutChangeEvent) => void;
    height: number;
};

/**
 * A function component that shows a profile screen.
 */
function ProfileScreen(props: ProfileScreenProps) {

    /**
     * state.
     */
    const [userProfileCardHeight, setUserProfileCardHeight] = useState<number>(0);

    const handleEditProfile = () => {
        showModal(
            'UPDATE_PROFILE'
        );
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

            <View style={{ marginTop: -(userProfileCardHeight / 4) }}>
                <UserProfileCard
                    onLayout={e => {
                        const { height } = e.nativeEvent.layout;
                        setUserProfileCardHeight(height);
                    }}
                    height={userProfileCardHeight}
                />
            </View>
        </View>
    );
};

/**
 * Renderes cover photo.
 */
function CoverPhoto({
    onCameraPress
}: CoverPhotoProps) {
    return (
        <View style={styles.coverPhoto}>
            <Image
                src={{ uri: 'https://cultivatedculture.com/wp-content/uploads/2019/05/Chromatic-LinkedIn-Cover-Photo-Background.png' }}
                style={commonStyles.flex}
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
 * Renderes user profile card.
 */
function UserProfileCard({
    onLayout
}: UserProfileCardProps) {
    return (
        <Card
            onLayout={onLayout}
            style={styles.contentStyle}
        >
            <Card.Content>
                <Image
                    src={{ uri: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png' }}
                    style={styles.userProfileImg}
                />

                <Title style={styles.profileName}>
                    {'user name'}
                </Title>

                <Text style={styles.profileBio}>
                    {`.sdsakndlkandlksndlknskaldnakLdnkadnkandkandkaشينىنمشىي
                    sdsakndlkandlksndlknskaldsdsakndlkandlksndlknskald
                    sdsakndlkandlksndlknskaldsdsakndlkandlksndlknskald
                    `}
                </Text>
            </Card.Content>
        </Card>
    );
};

/**
 * export as default.
 */
export default ProfileScreen;