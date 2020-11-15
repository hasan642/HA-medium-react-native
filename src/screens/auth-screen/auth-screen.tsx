import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { commonStyles } from 'theme';
import {
    Button,
    Text
} from 'components';
import { View as AnimatbleView } from 'react-native-animatable';
import {
    SocialLogin,
    General as GeneralUtils,
} from 'utils';
import { translate } from 'i18n';
import { getAppName } from 'config';
import {
    useSelector,
    useDispatch
} from "react-redux"
import {
    userSelector,
    createUser
} from 'redux/slices/user-slice';

/**
 * A function component that shows a login screen
 */
function AuthScreen() {

    /**
     * use dispatch.
     */
    const dispatch = useDispatch();

    /**
     * handle continue with google.
     */
    const continueWithGoogle = async () => {
        SocialLogin.continueWithGoogle()
            .then(({ user }) => {
                if (user !== null) {

                    /**
                     * handle user response.
                     */
                    dispatch(createUser(
                        user.name,
                        user.email,
                        user.photo
                    ));

                };
            });
    };

    /**
     * handle continue with facebook.
     */
    const continueWithFB = () => {
        SocialLogin.continueWithFB()
            .then(async ({
                user,
                kind,
                error
            }) => {

                /**
                 * handle if kind is not "OK".
                 */
                if (kind !== 'OK') {
                    return GeneralUtils.showAlert(
                        null,
                        error,
                        [{
                            text: 'ok',
                            style: 'cancel'
                        }],
                        {
                            cancelable: true
                        }
                    )
                };

                /**
                 * handle user response.
                 */
                dispatch(createUser(
                    user.name,
                    user.email,
                    user.profilePicture
                ));
                
            });
    };

    /**
     * handle continuew with twitter.
     */
    const continueWithTwitter = () => {
        SocialLogin.continueWithTwitter()
            .then(user => {

                /**
                 * handle user response.
                 */
                dispatch(createUser(
                    user.name,
                    user.email,
                    'image'
                ));

            });
    };

    /**
     * navigate to app
     */
    const navigateToApp = () => {

    };

    const AuthView = () => {
        return (
            <AnimatbleView
                animation='bounceInLeft'
                delay={600}
                style={styles.btns}
            >
                <Button
                    icon={'facebook'}
                    onPress={continueWithFB}
                >
                    {'Facebook'}
                </Button>

                <Button
                    icon={'google'}
                    onPress={continueWithGoogle}
                    style={commonStyles.marginTop8}
                >
                    {'Google'}
                </Button>

                <Button
                    icon={'twitter'}
                    onPress={continueWithTwitter}
                    style={commonStyles.marginTop8}
                >
                    {'Twitter'}
                </Button>
            </AnimatbleView>
        );
    }

    return (
        <View style={styles.container}>
            <AnimatbleView
                animation='bounceInLeft'
                delay={100}
                duration={500}
                style={styles.btns}
            >
                <Text style={styles.title}>
                    {`${translate('authScreen.joinTo')} ${getAppName()}`}
                </Text>
                <Text style={styles.subTitle}>
                    {translate('authScreen.continueWith')}
                </Text>
            </AnimatbleView>

            <AuthView />
        </View>
    );
};

/**
 * custom navigation options.
 */
AuthScreen.options = {
    topBar: {
        visible: false
    }
};

/**
 * export as default.
 */
export default AuthScreen;