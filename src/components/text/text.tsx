import React, { ReactNode } from 'react';
import { Text as RNPaperTxt } from 'react-native-paper';
import { TextStyle } from 'react-native';
import styles from './styles';

/**
 * text props.
 */
interface TextProps {
    children: ReactNode;

    /**
     * optional props.
     */
    style?: TextStyle;
};

/**
 * A function component that shows a text.
 */
function Text(props: TextProps) {

    /**
     * grap the props.
     */
    const {
        children,
        style: overrideTextStyle
    } = props;

    return (
        <RNPaperTxt
            style={[
                styles.text,
                overrideTextStyle
            ]}
        >
            {children}
        </RNPaperTxt>
    );
};

/**
 * export as default.
 */
export default Text;