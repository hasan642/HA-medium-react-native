import { StyleSheet } from 'react-native';
import { color } from 'theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.light
    },
    title: {
        marginTop: 8,
        textAlign: 'center'
    },
    header: {
        borderBottomWidth: 0,
        elevation: 0
    },
    internalContainer: {
        flex: 1,
        paddingTop: 16
    },
    contentContainerStyle: {
        alignItems: 'center'
    },
    inputsHolder: {
        width: '95%',
        marginTop: 16
    },
    input: {
        marginBottom: 8
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        left: -4
    },
    avatar: {
        backgroundColor: color.light
    }
});

/**
 * export as default.
 */
export default styles;