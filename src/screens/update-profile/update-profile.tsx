import React, {
    useRef,
    useEffect
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
import { useForm } from 'react-hook-form';
import { formValidator } from './form-validation';
import { yupResolver } from '@hookform/resolvers/yup';

/**
 * type checking.
 */
interface UpdateProfileScreenProps extends NavigationComponentProps {

};
interface EditableAvatarProps {
    handleCameraPress: () => void;
};
type FormData = {
    name: string;
    bio: string;
};

/**
 * A function component that shows the UpdateProfileScreen.
 */
function UpdateProfileScreen(props: UpdateProfileScreenProps) {

    /**
     * initialize react form hook.
     */
    const {
        register,
        unregister,
        handleSubmit,
        errors,
        setValue,
    } = useForm<FormData>({
        resolver: yupResolver(formValidator()),
    });

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
    const handleSavePress = ({ name, bio }: FormData) => {
        console.log({ name, bio });
    };

    /**
     * Registeres form hook.
     */
    useEffect(
        () => {

            /**
             * register inputs. 
             */
            register('name');
            register('bio');

            /**
             * clean up function.
             */
            return () => {
                unregister('name');
                unregister('bio');
            };
        },
        [register]
    );
    console.log('errors', errors)
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
                    onPress={handleSubmit(handleSavePress)}
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
                        onChangeText={name => setValue('name', name)}
                        containerStyle={styles.input}
                        placeholder={translate('profileScreen.name')}
                        onSubmitEditing={() => bioRef.current.focus()}
                        errorMessage={errors.name ?.message}
                    />

                    <Input
                        onChangeText={bio => setValue('bio', bio)}
                        containerStyle={styles.input}
                        placeholder={translate('profileScreen.bio')}
                        ref={bioRef}
                        errorMessage={errors.bio ?.message}
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