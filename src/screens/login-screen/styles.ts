import { StyleSheet } from 'react-native';
import { color } from '../../theme';

/**
 * A styles of login screen live here.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.light,
        justifyContent: 'flex-end'
    },
    btns: {
        justifyContent: 'center',
        width: '85%',
        alignSelf: 'center',
        marginBottom: 20
    }
});

/**
 * export as default.
 */
export default styles;