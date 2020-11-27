/*********************************************************************************************************************
 * File: Input.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-25
 * Desc: File Description
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import React, { forwardRef } from 'react';
import {
  TextStyle,
  View,
  ViewStyle
} from 'react-native';
import styles, { theme } from './styles';
import {
  TextInput,
  HelperText
} from 'react-native-paper';

/**
 * interfaces and types
 */
interface InputProps {
  onChangeText: (text: string) => void;
  placeholder: string;

  value?: string;
  onSubmitEditing?: () => void;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  errorMessage?: string;
};

/**
 * A function component that shows the Input component.
*/
function Input({
  onChangeText,
  onSubmitEditing,
  value,
  placeholder,
  style: overrideInputStyle,
  containerStyle,
  errorMessage
}: InputProps,
  ref: any) {
  return (
    <View style={containerStyle}>
      <TextInput
        theme={theme}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={value}
        style={overrideInputStyle}
        error={errorMessage !== undefined}
        mode='outlined'
        placeholder={placeholder}
        ref={ref}
      />

      <HelperText

        {...{} as any}

        type="error"
        padding='none'
        visible={errorMessage !== undefined}
        style={styles.helperTxt}
      >
        {errorMessage}
      </HelperText>
    </View>
  );
};

/**
 * export as default
 */
export default forwardRef(Input);