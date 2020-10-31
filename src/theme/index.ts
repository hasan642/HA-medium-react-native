import { Dimensions } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

/**
 * export data.
 */
export { default as color } from './color';
export { default as typography } from './typography';
export { default as commonStyles } from './common-styles';
export {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
};
export const layout = Dimensions.get('window');