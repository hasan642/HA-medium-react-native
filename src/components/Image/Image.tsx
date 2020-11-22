/*********************************************************************************************************************
 * File: Image.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-11-22
 * Desc: This file contains an image of app using "fast image",
 * * refer to "https://github.com/DylanVann/react-native-fast-image" for
 * * more info.
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import React from 'react';
import styles from './styles';
import RNFastImage, {
  Source,
  ResizeMode,
  ImageStyle
} from 'react-native-fast-image';

/**
 * interfaces and types
 */
interface ImageProps {
  src: Source | number;

  /**
   * optional props.
   */
  resizeMode?: ResizeMode;
  style?: ImageStyle;
};

/**
 * A function component that shows the Image component.
*/
function Image({
  src,
  resizeMode = 'contain',
  style: overrideStyle
}: ImageProps) {
  return (
    <RNFastImage
      source={src}
      resizeMode={RNFastImage.resizeMode[resizeMode]}
      style={[
        styles.img,
        overrideStyle
      ]}
    />
  );
};

/**
 * export as default
 */
export default Image;