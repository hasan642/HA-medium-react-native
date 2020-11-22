import { StyleSheet } from 'react-native';
import { color } from 'theme';

const styles = StyleSheet.create({
    header: {
        backgroundColor: color.light,
        elevation: 0.8,
        borderBottomWidth: 0.5,
        borderBottomColor: color.silver
    },
    titleStyle: {
        fontWeight: 'bold'
    }
});

/**
 * export as default.
 */
export default styles;