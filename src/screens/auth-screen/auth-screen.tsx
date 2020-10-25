import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { commonStyles } from 'theme';
import {
    Button,
    Text
} from 'components';
import { View as AnimatbleView } from 'react-native-animatable';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { TwitterLogin } from 'react-native-login-twitter';

TwitterLogin.init('oRklIZZz3YYrznKo1ib7cM2CC',
    'oS1jFlAew0hupcAiGKNlHYyMfaV6PviFD4T4oXWe6Yu4I8CsNI');
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';

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

    const AuthView = () => {
        return (
            <AnimatbleView
                animation='bounceInLeft'
                delay={600}
                style={styles.btns}
            >
                <Button
                    icon={'facebook'}
                    onPress={() => { }}
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
                        .catch(error=>{
                            console.log('error in',error)
                        })
                    }}
                    style={commonStyles.marginTop8}
                >
                    {'Twitter'}
                </Button>

                {
                    /**
                     * maybe used later,
                     * * social login are supported now.
                     */
                    // <Button
                    //     icon={'mail'}
                    //     onPress={() => {
                    //     }}
                    //     style={commonStyles.marginTop8}
                    // >
                    //     {'Email'}
                    // </Button>
                }

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
                    {'Join Medium.'}
                </Text>
                <Text style={styles.subTitle}>
                    {'continue with ...'}
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