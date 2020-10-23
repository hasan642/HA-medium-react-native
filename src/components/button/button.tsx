import React, { ReactNode } from 'react';
import { Button as RNPaperBtn } from 'react-native-paper';
import styles from './styles';
import { ViewStyle } from 'react-native';

/**
 * button types.
 */
interface ButtonProps {
    onPress: () => void;
    children: ReactNode;

    /**
     * optional props.
     */
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
};

/**
 * A function component that shows a button component.
 */
function Button(props: ButtonProps) {

    /**
     * grap the props.
     */
    const {
        onPress,
        loading,
        disabled,
        children,
        style: overrideStyle
    } = props;

    return (
        <RNPaperBtn
            loading={loading}
            disabled={disabled}
            compact
            onPress={onPress}
            style={[styles.btn, overrideStyle]}
        >
            {children}
        </RNPaperBtn>
    );
};

/**
 * export as default.
 */
export default Button;