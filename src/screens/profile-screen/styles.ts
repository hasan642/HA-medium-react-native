import { StyleSheet } from 'react-native';
import {
    color,
    responsiveHeight
} from 'theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.offWhite
    },
    coverPhoto: {
        height: responsiveHeight(25)
    },
    cameraIcon: {
        position: 'absolute',
        left: 0,
        bottom: 0
    }
});

/**
 * export as default.
 */
export default styles;