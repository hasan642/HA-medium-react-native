import { isRTL } from "i18n";

/**
 * A fonts of app live here.
 */
const typography = Object.freeze({
    black: isRTL() ? 'Tajawal-Black' : 'Lato-Black',
    bold: isRTL() ? 'Tajawal-Bold' : 'Lato-Bold',
    light: isRTL() ? 'Tajawal-Light' : 'Lato-Light',
    regular: isRTL() ? 'Tajawal-Regular' : 'Lato-Regular'
});

/**
 * export as default.
 */
export default typography;