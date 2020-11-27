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
    Text,
    Loader
} from 'components';
import { translate } from 'i18n';
import {
    Appbar,
    Card,
    Title
} from 'react-native-paper';
import { commonStyles } from 'theme';
import { showModal } from 'navigation';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/slices';

/**
 * type checking.
 */
interface ProfileScreenProps extends NavigationComponentProps {

};
interface CoverPhotoProps {
    onCameraPress: () => void;
    coverProfilePictureUri: string;
};
interface UserProfileCardProps {
    onLayout: (e: LayoutChangeEvent) => void;
    height: number;
    profilePictureUri: string;
    name: string;
    bio: string;
};

/**
 * A function component that shows a profile screen.
 */
function ProfileScreen(props: ProfileScreenProps) {

    /**
     * get data from redux.
     */
    const {
        loading,
        user
    } = useSelector(userSelector);
    
    /**
     * state.
     */
    const [userProfileCardHeight, setUserProfileCardHeight] = useState<number>(0);

    /**
     * Handles edit profile.
     */
    const handleEditProfile = () => {
        showModal('UPDATE_PROFILE');
    };

    /**
     * Handles camera press.
     */
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
                coverProfilePictureUri={user.coverPhoto}
                onCameraPress={handleCameraPress}
            />

            <View style={{ marginTop: -(userProfileCardHeight / 2) }}>
                <UserProfileCard
                    onLayout={e => {
                        const { height } = e.nativeEvent.layout;
                        setUserProfileCardHeight(height);
                    }}
                    height={userProfileCardHeight}
                    name={user && user.name}
                    profilePictureUri={user && user.profilePicture}
                    bio={user && user.bio}
                />
            </View>

            {loading && <Loader />}
        </View>
    );
};

/**
 * Renderes cover photo.
 */
function CoverPhoto({
    onCameraPress,
    coverProfilePictureUri
}: CoverPhotoProps) {
    return (
        <View style={styles.coverPhoto}>
            <Image
                src={{ uri: coverProfilePictureUri }}
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
    onLayout,
    profilePictureUri,
    name,
    bio
}: UserProfileCardProps) {
    return (
        <Card
            onLayout={onLayout}
            style={styles.contentStyle}
        >
            <Card.Content>
                <Image
                    src={{ uri: profilePictureUri }}
                    style={styles.userProfileImg}
                />

                <Title style={styles.profileName}>
                    {name}
                </Title>

                <Text style={styles.profileBio}>
                    {bio}
                </Text>
            </Card.Content>
        </Card>
    );
};

/**
 * export as default.
 */
export default ProfileScreen;