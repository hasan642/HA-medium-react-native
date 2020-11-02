/**
 * A .ts file that contains a general utils functions.
 */

import {
    Alert,
    AlertOptions,
    AlertButton
} from "react-native";
import RNToast from 'react-native-simple-toast';

/**
 * A function helper that shows an alert.
 */
function showAlert(
    title: string,
    message: string,
    buttons: AlertButton[],
    options: AlertOptions
) {
    Alert.alert(
        title,
        message,
        buttons,
        options
    );
};

/**
 * A function helper that shows a toast.
 */
function showToast(message: string) {
    RNToast.showWithGravity(
        message,
        RNToast.SHORT,
        RNToast.BOTTOM
    );
};

/**
 * export all general utils.
 */
export default {
    showAlert,
    showToast
};