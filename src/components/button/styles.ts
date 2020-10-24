import { StyleSheet } from 'react-native';
import {
    color,
    typography
} from 'theme';
import { DefaultTheme } from 'react-native-paper';
import { PaperTheme } from 'components/types';

/**
 * A button styles live here.
 */
const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 1,
        borderColor: color.dark,
        borderRadius: 8
    },
    btnLabelStyle: {
        color: color.dark,
        fontFamily: typography.primary,
    }
});

/**
 * the button theme.
 */
export const buttonTheme: PaperTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: color.dark,
        text: color.dark,
        placeholder: color.dark,
        surface: color.dark
    }
};

/**
 * export as default.
 */
export default styles;