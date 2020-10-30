/**
 * A .ts file that contains a config for app.
 */

import DeviceInfo from 'react-native-device-info';

/**
 * get an application name.
 */
export function getAppName() {
    return DeviceInfo.getApplicationName();
};