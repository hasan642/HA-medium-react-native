import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';
import { ViewStyle } from 'react-native';

/**
 * type checking.
 */
interface HeaderProps {
    title?: string;
    handleGoBack?: () => void;
    children?: JSX.Element;
    style?: ViewStyle;
};

/**
 * A function component that shows a header.
 */
function Header({
    handleGoBack,
    title,
    children,
    style: overrideStyle
}: HeaderProps) {
    return (
        <Appbar.Header
            style={[
                styles.header,
                overrideStyle
            ]}
        >

            {
                handleGoBack !== undefined &&
                (<Appbar.BackAction
                    onPress={handleGoBack}
                />)
            }

            <Appbar.Content
                title={title}
                titleStyle={styles.titleStyle}
            />

            {children}
        </Appbar.Header>
    );
};

/**
 * export as default.
 */
export default Header;