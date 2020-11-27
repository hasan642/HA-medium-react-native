/*********************************************************************************************************************
 * File: Loader.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-25
 * Desc: All Loader styles live here.
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import { StyleSheet } from 'react-native';
import { color } from 'theme';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: color.silverOverlay,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderHolder: {
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.light,
    },
    spinner: {
        padding: 16
    }
});

/**
 * export as default.
 */
export default styles;