import { Alert, AlertOptions, AlertButton } from "react-native";

/**
 * A .ts file that contains a general utils functions.
 */

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
 * export all general utils.
 */
export default {
    showAlert,
};