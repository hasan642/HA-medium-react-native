import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles';

/**
 * type checking.
 */
interface HeaderProps {
    handleGoBack?: () => void;
    title: string;
};

/**
 * A function component that shows a header.
 */
function Header({
    handleGoBack,
    title
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

            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

/**
 * export as default.
 */
export default Header;