import { StyleSheet } from 'react-native';
import {
    typography,
    color
} from 'theme';

/**
 * The styles of home screen live here.
 */
const styles = StyleSheet.create({
    list: {
        marginHorizontal: 8,
        marginTop: 4
    },
    listItem: {
        marginBottom: 4
    },
    contentStyle: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: typography.bold,
        color: color.dark
    },
    subTitle: {
        fontFamily: typography.light,
        marginTop: 8
    },
    imgStyle: {
        height: 75,
        width: 75
    },
    cardContentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    icon: {
        marginTop: 2,
        borderRadius: 12
    },
    bottomSection: {
        marginTop: 16
    }
});

/**
 * export as default.
 */
export default styles;