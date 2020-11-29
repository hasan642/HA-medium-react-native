import React from 'react';
import { List } from 'react-native-paper';
import styles from './styles';
import { color } from 'theme';

/**
 * type checking.
 */
type PaperIcon = string | React.ReactNode;;
interface ListItemProps {
    title: string;
    onPress?: () => void;

    /**
     * useful as 'string', only if 'paperIcon' is provided.
     */
    leftIcon?: PaperIcon
    rightIcon?: PaperIcon;

    leftPaperIcon?: boolean;
    rightPaperIcon?: boolean;
};

/**
 * A function component that shows a list item.
 */
function ListItem({
    title,
    onPress,
    leftPaperIcon = false,
    leftIcon,
    rightPaperIcon = false,
    rightIcon
}: ListItemProps) {

    /**
     * Renderes left icon.
     */
    const renderLeftIcon = props => {
        let listItemComponent = null;

        if (leftPaperIcon)
            listItemComponent = (
                <List.Icon
                    {...props}
                    icon={leftIcon}
                />
            );
        else
            listItemComponent = leftIcon;

        return listItemComponent;
    };

    /**
     * Renderes right icon.
     */
    const renderRightIcon = props => {
        let listItemComponent = null;

        if (rightPaperIcon)
            listItemComponent = (
                <List.Icon
                    {...props}
                    icon={rightIcon}
                />
            );
        else
            listItemComponent = rightIcon;

        return listItemComponent;
    };

    return (
        <List.Item

            {...{} as any}

            disabled={onPress === undefined}
            title={title}
            titleStyle={styles.titleStyle}
            onPress={onPress}
            style={styles.listItem}
            left={renderLeftIcon}
            right={renderRightIcon}
        />
    );
};

/**
 * export as default.
 */
export default ListItem;