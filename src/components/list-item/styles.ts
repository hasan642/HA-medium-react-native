import { StyleSheet } from 'react-native';
import { color } from 'theme';

/**
 * the styles of list item lives here.
 */
const styles = StyleSheet.create({
    listItem: {
        backgroundColor: color.light,
        marginBottom: 1
    },
    titleStyle: {
        color: color.boulder,
        fontWeight: 'bold'
    }
});

/**
 * export as default.
 */
export default styles;