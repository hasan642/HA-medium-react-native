import { StyleSheet } from 'react-native';
import { color } from '../../theme';

/**
 * A styles of login screen live here.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.light,
        justifyContent: 'center'
    },
    btns: {
        justifyContent: 'center',
        width: '85%',
        alignSelf: 'center',
        marginBottom: 20
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40
    },
    subTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 10
    }
});

/**
 * export as default.
 */
export default styles;