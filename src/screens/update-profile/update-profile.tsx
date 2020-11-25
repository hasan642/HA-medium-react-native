import React, {
    useState,
    useRef
} from 'react';
import {
    View,
    TextInput
} from 'react-native';
import styles from './styles';
import { NavigationComponentProps } from 'react-native-navigation';
import {
    Header,
    Input
} from 'components';
import { translate } from 'i18n';
import { dismissModal } from 'navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
    Avatar,
    IconButton,
    Appbar
} from 'react-native-paper';
import { layout } from 'theme';

/**
 * type checking.
 */
interface UpdateProfileScreenProps extends NavigationComponentProps {

};
interface EditableAvatarProps {
    handleCameraPress: () => void;
};

/**
 * A function component that shows the UpdateProfileScreen.
 */
function UpdateProfileScreen(props: UpdateProfileScreenProps) {

    /**
     * state.
     */
    const [name, setName] = useState<string>(null);
    const [bio, setBio] = useState<string>(null);

    /**
     * refs
     */
    const bioRef = useRef<TextInput>(null);

    /**
     * Handle camera press to change the user profile photo.
     */
    const handleCameraPress = () => {

    };

    /**
     * Handle save user data.
     */
    const handleSavePress = () => {

    };

    return (
        <View style={styles.container}>
            <Header
                style={styles.header}
                title={translate('profileScreen.update')}
                handleGoBack={() => dismissModal(props.componentId)}
            >
                <Appbar.Action
                    {...{} as any}
                    icon="check"
                    onPress={handleSavePress}
                />
            </Header>

            <KeyboardAwareScrollView
                style={styles.internalContainer}
                contentContainerStyle={styles.contentContainerStyle}
                showsVerticalScrollIndicator={false}
            >
                <EditableAvatar
                    handleCameraPress={handleCameraPress}
                />

                <View style={styles.inputsHolder}>
                    <Input
                        onChangeText={setName}
                        value={name}
                        style={styles.input}
                        placeholder={translate('profileScreen.name')}
                        onSubmitEditing={() => bioRef.current.focus()}
                    />

                    <Input
                        onChangeText={setBio}
                        value={bio}
                        style={styles.input}
                        placeholder={translate('profileScreen.bio')}
                        ref={bioRef}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

/**
 * Renderes edutable avatar.
 */
function EditableAvatar({
    handleCameraPress
}: EditableAvatarProps) {
    return (
        <View>
            <Avatar.Image
                size={layout.width / 3}
                style={styles.avatar}
                source={{ uri: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png' }}
            />

            <IconButton
                {...{} as any}
                icon='camera'
                size={24}
                style={styles.cameraIcon}
                onPress={handleCameraPress}
            />
        </View>
    )
};

/**
 * export as default.
 */
export default UpdateProfileScreen;