import { StyleSheet } from 'react-native';
import { color, layout, typography, responsiveFontSize } from 'theme';

/**
 * all langauge switcher styles live here.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.light
    },
    header: {
        borderBottomWidth: 0,
        elevation: 0
    },
    languageItem: {
        marginBottom: 16,
        width: '40%',
        height: layout.width / 4,
        borderRadius: 8,
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dashed'
    },
    contentContainerStyle: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    scrollView: {
        flex: 1,
        paddingTop: 16
    },
    text: {
        color: color.silver,
        fontFamily: typography.regular,
        textAlign: 'center',
        fontSize: responsiveFontSize(2)
    },
    btn: {
        width: '90%',
        marginVertical: 16,
        alignSelf: 'center',
        borderWidth:1,
        borderStyle:'dotted'
    },
    iconBtn: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});

/**
 * export as default.
 */
export default styles;