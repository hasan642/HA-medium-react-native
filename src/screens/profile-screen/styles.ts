import { StyleSheet } from 'react-native';
import {
    color,
    responsiveHeight,
    layout
} from 'theme';

/**
 * constants.
 */
const userProfileCardWidth = layout.width * 0.95;
const userProfileImg = userProfileCardWidth / 3;

/**
 * the styles live here.
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.offWhite
    },
    coverPhoto: {
        height: responsiveHeight(25),
    },
    cameraIcon: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    contentStyle: {
        width: userProfileCardWidth,
        alignSelf: 'center',
        borderRadius: 8,
    },
    userProfileImg: {
        height: userProfileImg,
        width: userProfileImg,
        alignSelf: 'center'
    },
    profileName: {
        color: color.mineShaft,
        textAlign: 'center',
        marginTop: 16
    },
    profileBio: {
        color: color.boulder,
        textAlign: 'center',
        marginTop: 8
    }
});

/**
 * export as default.
 */
export default styles;