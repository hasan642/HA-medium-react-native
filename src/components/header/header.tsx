import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';

/**
 * type checking.
 */
interface HeaderProps {
    title: string;

    /**
     * an optional props.
     */
    handleGoBack?: () => void;
    children?: JSX.Element;
};

/**
 * A function component that shows a header.
 */
function Header({
    handleGoBack,
    title,
    children
}: HeaderProps) {
    return (
        <Appbar.Header
            style={styles.header}
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