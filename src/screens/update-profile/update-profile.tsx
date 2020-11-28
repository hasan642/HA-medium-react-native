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
    Input,
    Loader
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
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    userSelector,
    updateUser
} from 'redux/slices';
import {
    General,
    StorageHelper
} from 'utils';

/**
 * type checking.
 */
interface UpdateProfileScreenProps extends NavigationComponentProps {

};
interface EditableAvatarProps {
    handleCameraPress: () => void;
    profilePictureUri: string;
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
     * get data from redux.
     */
    const {
        loading,
        success,
        error,
        user
    } = useSelector(userSelector);

    /**
     * initialize react form hook.
     */
    const {
        register,
        unregister,
        handleSubmit,
        errors,
        setValue,
        getValues,
        watch
    } = useForm<FormData>({
        resolver: yupResolver(formValidator()),
    });

    /**
     * watch all fields to re-render when setValue in useEffect
     * * to set initial values.
     */
    watch();

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

    /**
     * update user data to inputs.
     */
    useEffect(
        () => {
            if (user) {
                setValue('name', user.name || '');
                setValue('bio', user.bio || '');
            };
        },
        [user]
    );

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * use effect.
     */
    useEffect(
        () => {
            if (success) {
                General.showToast(translate('profileScreen.upadted'));
                dismissModal(props.componentId);
            } else if (error != null) {
                General.showToast(error);
            };
        },
        [
            success,
            error,
            props.componentId
        ]
    );

    /**
     * refs.
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
    const handleSavePress = async ({ name, bio }: FormData) => {
        const { email } = await StorageHelper.get('@User');
        dispatch(updateUser({
            name,
            bio,
            email
        }));
    };

    /**
     * get data from get values.
     */
    const {
        name,
        bio
    } = getValues();

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
                    profilePictureUri={user && user.profilePicture}
                    handleCameraPress={handleCameraPress}
                />

                <View style={styles.inputsHolder}>
                    <Input
                        onChangeText={name => setValue('name', name)}
                        containerStyle={styles.input}
                        placeholder={translate('profileScreen.name')}
                        onSubmitEditing={() => bioRef.current.focus()}
                        errorMessage={errors && errors.name && errors.name.message}
                        value={name}
                    />

                    <Input
                        onChangeText={bio => setValue('bio', bio)}
                        containerStyle={styles.input}
                        placeholder={translate('profileScreen.bio')}
                        ref={bioRef}
                        errorMessage={errors && errors.bio && errors.bio.message}
                        value={bio}
                    />
                </View>
            </KeyboardAwareScrollView>

            {loading && <Loader />}
        </View>
    );
};

/**
 * Renderes edutable avatar.
 */
function EditableAvatar({
    handleCameraPress,
    profilePictureUri
}: EditableAvatarProps) {
    return (
        <View>
            <Avatar.Image
                size={layout.width / 3}
                style={styles.avatar}
                source={{ uri: profilePictureUri }}
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