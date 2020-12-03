import React, { ReactNode } from 'react';
import {
    TextStyle,
    Text as RnTxt
} from 'react-native';
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
    adjustsFontSizeToFit?: boolean;
    numberOfLines?: number;

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
        style: overrideTextStyle,
        adjustsFontSizeToFit,
        numberOfLines
    } = props;

    return (
        <RnTxt
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            numberOfLines={numberOfLines}
            style={[
                styles.text,
                overrideTextStyle
            ]}
        >
            {children}
        </RnTxt>
    );
};

/**
 * export as default.
 */
export default Text;