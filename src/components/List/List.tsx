/*********************************************************************************************************************
 * File: List.tsx
 * Developed By Hasan Alawneh
 * Email: h.alawneh@alsahabglobal.com
 * Date: 2020-12-03
 * Desc: File Description
 * Copyright (c) - Waseet.net
 *********************************************************************************************************************/

import React from 'react';
import {
  FlatList,
  ListRenderItem,
  ViewStyle,
} from 'react-native';
import styles from './styles';

/**
 * interfaces and types
 */
interface ListProps {
  data: any[];
  renderItem: ListRenderItem<any>;

  /**
   * optional props.
   */
  keyList?: string;
  style?: ViewStyle;
  showIndicator?: boolean;

};

/**
 * A function component that shows the List component.
*/
function List(props: ListProps) {

  /**
   * grap the props.
   */
  const {
    data,
    renderItem,
    keyList,
    style: overrideStyle,
    showIndicator = false
  } = props;

  /**
   * Generates key extractor.
   */
  const generateKey = (it, index) => keyList ? String(it[keyList]) : String(index);

  return (<FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={generateKey}
    style={overrideStyle}
    showsVerticalScrollIndicator={showIndicator}
    showsHorizontalScrollIndicator={showIndicator}
  />);

};

/**
 * export as default
 */
export default List;