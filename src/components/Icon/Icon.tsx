/*********************************************************************************************************************
 * File: Icon.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-22
 * Desc: File Description
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import React from 'react';
import { ViewStyle } from 'react-native';
import { IconButton } from 'react-native-paper';
import { color as themeColor } from 'theme';

/**
 * interfaces and types
 */
interface IconProps {
  icon: string;

  /**
   * an optional props.
   */
  color?: string;
  handlePress?: () => void;
  size?: number;
  style?: ViewStyle;
};

/**
 * A function component that shows the Icon component.
*/
function Icon({
  icon,
  color = themeColor.dark,
  handlePress,
  size = 20,
  style
}: IconProps) {
  return (
    <IconButton

      /**
       * to resolve type script issue, that requires the whole
       * * of component props.
       */
      {...{} as any}

      disabled={handlePress === undefined}
      icon={icon}
      color={color}
      size={size}
      onPress={handlePress}
      style={style}
    />
  );
};

/**
 * export as default
 */
export default Icon;