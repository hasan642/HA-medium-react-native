/*********************************************************************************************************************
 * File: Loader.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-25
 * Desc: This file contains an overlay loader.
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ActivityIndicator } from 'react-native-paper';
import { color } from 'theme';

/**
 * A function component that shows the Loader component.
*/
function Loader() {
  return (<View style={styles.container}>
    <View style={styles.loaderHolder}>
      <ActivityIndicator
        size={'small'}
        color={color.mineShaft}
        style={styles.spinner}
      />
    </View>
  </View>);
};

/**
 * export as default
 */
export default Loader;