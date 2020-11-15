import { Dimensions } from 'react-native';

/**
 * export data.
 */
export * from "react-native-responsive-dimensions";
export { default as color } from './color';
export { default as typography } from './typography';
export { default as commonStyles } from './common-styles';
export const layout = Dimensions.get('window');