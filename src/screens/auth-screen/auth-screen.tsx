import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { commonStyles } from 'theme';
import {
    Button,
    Text
} from 'components';
import { View as AnimatbleView } from 'react-native-animatable';
import { TwitterLogin } from 'react-native-login-twitter';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';
import {
    SocialLogin,
    General as GeneralUtils
} from 'utils';
import { translate } from 'i18n';
import { getAppName } from 'config';

/**
 * interfaces and types.
 */
interface LoginScreenProps {

};

/**
 * A function component that shows a login screen
 */
function LoginScreen(props: LoginScreenProps) {

    const signIn = async () => {
        try {
            const has = await GoogleSignin.hasPlayServices();
            console.log('dddd', has)
            const userInfo = await GoogleSignin.signIn();
            console.log('user is', userInfo);
        } catch (error) {
            console.log('error', error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    /**
     * handle continue with facebook.
     */
    const continueWithFB = () => {
        SocialLogin.continueWithFB()
            .then(({
                user,
                kind,
                error
            }) => {
                console.log({
                    user,
                    kind,
                    error
                })
                if (kind === 'REJECTED') {
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

                //do some login when tjere is no errors.

            });
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
                    onPress={signIn}
                    style={commonStyles.marginTop8}
                >
                    {'Google'}
                </Button>

                <Button
                    icon={'twitter'}
                    onPress={() => {
                        TwitterLogin.logIn()
                            .catch(error => {
                                console.log('error in', error)
                            })
                    }}
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
LoginScreen.options = {
    topBar: {
        visible: false
    }
};

/**
 * export as default.
 */
export default LoginScreen;