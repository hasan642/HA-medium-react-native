import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import styles from './styles';
import { commonStyles } from 'theme';
import { Button } from 'components';

/**
 * interfaces and types.
 */
interface LoginScreenProps {

};

/**
 * A function component that shows a login screen
 */
function LoginScreen(props: LoginScreenProps) {
    return (
        <View style={styles.container}>
            <View style={{ ...StyleSheet.absoluteFillObject }}>
                <Image
                    source={require('common-assets/bg.png')}
                    style={commonStyles.flex}
                />
            </View>

            <View style={styles.btns}>
                <Button
                    onPress={() => { }}
                >
                    {'signin'}
                </Button>

                <Button
                    onPress={() => { }}
                    style={commonStyles.marginTop8}
                >
                    {'signin with FB'}
                </Button>

                <Button
                    onPress={() => { }}
                    style={commonStyles.marginTop8}
                >
                    {'signin with google'}
                </Button>

                <Button
                    onPress={() => { }}
                    style={commonStyles.marginTop8}
                >
                    {'signin with twitter'}
                </Button>
            </View>
        </View>
    );
};

/**
 * export as default.
 */
export default LoginScreen;