/*********************************************************************************************************************
 * File: RadioBtn.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-28
 * Desc: File Description
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import React from 'react';
import styles from './styles';
import { RadioButton } from 'react-native-paper';

/**
 * interfaces and types
 */
interface RadioBtnProps {
  value: string;
  selectedVal: string;
  onPress: () => void
};

/**
 * A function component that shows the RadioBtn component.
*/
function RadioBtn({
  value,
  selectedVal,
  onPress
}: RadioBtnProps) {
  return (<RadioButton.Android
    value={value}
    status={value === selectedVal ? 'checked' : 'unchecked'}
    onPress={onPress}
  />);
};

/**
 * export as default
 */
export default RadioBtn;