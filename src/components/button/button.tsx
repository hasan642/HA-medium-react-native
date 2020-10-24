import React, { ReactNode } from 'react';
import {
    Button as RNPaperBtn
} from 'react-native-paper';
import { IconSource } from 'react-native-paper/src/components/Icon';
import styles, { buttonTheme } from './styles';
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
    icon?: IconSource;
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
        style: overrideStyle,
        icon
    } = props;

    return (
        <RNPaperBtn
            theme={buttonTheme}
            icon={icon}
            loading={loading}
            disabled={disabled}
            compact
            onPress={onPress}
            style={[
                styles.btn,
                overrideStyle
            ]}
            labelStyle={[
                styles.btnLabelStyle
            ]}
        >
            {children}
        </RNPaperBtn>
    );
};

/**
 * export as default.
 */
export default Button;