import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { commonStyles } from 'theme';
import {
    Button,
    Text
} from 'components';
import { View as AnimatbleView } from 'react-native-animatable';

/**
 * interfaces and types.
 */
interface LoginScreenProps {

};

/**
 * A function component that shows a login screen
 */
function LoginScreen(props: LoginScreenProps) {

    const SignUpView = () => {
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
                    onPress={() => { }}
                    style={commonStyles.marginTop8}
                >
                    {'Google'}
                </Button>

                <Button
                    icon={'twitter'}
                    onPress={() => { }}
                    style={commonStyles.marginTop8}
                >
                    {'Twitter'}
                </Button>

                <Button
                    icon={'mail'}
                    onPress={() => {
                    }}
                    style={commonStyles.marginTop8}
                >
                    {'Email'}
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
                    {'Join Medium.'}
                </Text>
                <Text style={styles.subTitle}>
                    {'continue with ...'}
                </Text>
            </AnimatbleView>

            <SignUpView />
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