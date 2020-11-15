import { StyleSheet } from 'react-native';
import { color } from 'theme';

/**
 * A common styles of the ap will be live here.
 */
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    nonFlex: {
        flex: 0
    },
    marginTop8: {
        marginTop: 8
    },
    elevaton: {
        shadowColor: color.dark,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    }
});

/**
 * export as default.
 */
export default styles;