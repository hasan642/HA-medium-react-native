/*********************************************************************************************************************
 * File: Input.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-25
 * Desc: File Description
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import React, { forwardRef } from 'react';
import { TextStyle } from 'react-native';
import styles, { theme } from './styles';
import { TextInput } from 'react-native-paper';

/**
 * interfaces and types
 */
interface InputProps {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;

  onSubmitEditing?: () => void;
  error?: boolean;
  style?: TextStyle;
};

/**
 * A function component that shows the Input component.
*/
function Input({
  onChangeText,
  onSubmitEditing,
  value,
  placeholder,
  error = false,
  style: overrideInputStyle
}: InputProps,
  ref: any) {
  return (<TextInput
    theme={theme}
    onChangeText={onChangeText}
    onSubmitEditing={onSubmitEditing}
    value={value}
    style={overrideInputStyle}
    error={error}
    mode='outlined'
    placeholder={placeholder}
    ref={ref}
  />);
};

/**
 * export as default
 */
export default forwardRef(Input);