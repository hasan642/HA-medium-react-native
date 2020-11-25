/*********************************************************************************************************************
 * File: Input.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-25
 * Desc: All Input styles live here.
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import { StyleSheet } from 'react-native';
import { PaperTheme } from 'components/types';
import { color } from 'theme';
import { DefaultTheme } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {

    },
});

/**
 * The text input paper theme.
 */
export const theme: PaperTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: color.emerald
    }
};

export default styles;